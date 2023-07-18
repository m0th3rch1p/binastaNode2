import express, { Application } from "express";
// import morgan from "morgan";
import cors from 'cors';
import helmet from 'helmet';
import vhost from "vhost";
import path from 'path'
import https from 'https';
import fs from 'fs';

import config from "@/config";
import { db_init } from "@/database";
import { session_init } from "@/session";
import logger from "@/helpers/logger";

import { shopApp } from "./shopApp";
import { adminApp } from "./adminApp";
import { distributorApp } from "./distributorApp";

import productRoutes from "@/routes/products.routes";
import blogRoutes from "@/routes/blog.routes";
import messageRoutes from "@/routes/message.routes";
import { distributorShopApp } from "./distributorShopApp";

// import { init_pp } from "@/services/paymentGateways/paypal.gateway";
// import { init_mpesa } from "@/services/paymentGateways/mpesa.gateway";
declare module "express-session" {
    interface SessionData {
        user_id: number,
        role: string,
        tenant_id: number,
    }
};

const mainApp: Application = express();

// 3rd Party Middlewares
// mainApp.use(morgan("combined"));
mainApp.use(express.urlencoded({ extended: true }));
mainApp.use(express.json());
mainApp.use(helmet());
mainApp.use(cors());
// mainApp.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// mainApp.use(cors({ origin: "http://localhost:3001", credentials: true }));

// Initialize DB
db_init();

// Intialize Payment Processors
// init_pp(config.paypal.client_id, config.paypal.client_secret);

// init_mpesa(config.mpesa.consumer_key, config.mpesa.consumer_secret, config.mpesa.business_short_code, config.mpesa.pass_key);

// Initialize Session
const session = session_init();
if (!session) process.exit();
mainApp.use(session);

mainApp.use(express.static("productImages"));
mainApp.use(express.static("productCategories"));
mainApp.use(express.static("blogPosts"));


// Subdomain Routing
console.log("Platform", config.platform);
mainApp.use(vhost(`shop.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, shopApp));
mainApp.use(vhost(`distributor.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, distributorApp));
mainApp.use(vhost(`management.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, adminApp));
mainApp.use(vhost(`*.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, distributorShopApp));

mainApp.use(express.static(path.join(__dirname, 'front', 'main', 'build')));

mainApp.use("/products", productRoutes);
mainApp.use("/blogs", blogRoutes);
mainApp.use("/messages", messageRoutes);

mainApp.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front', 'main', 'build', 'index.html'))
})

const httpsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem'), 'utf8'),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'), 'utf8'),
  hostname: config.serverHost
} as https.ServerOptions, mainApp);

httpsServer.listen(config.serverPort, () => {
    logger.info("Https server running successfully");
});

