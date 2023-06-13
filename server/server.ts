import express, { Application } from "express";
import morgan from "morgan";
import cors from 'cors';
import helmet from 'helmet';
import vhost from "vhost";

import config from "@/config";
import { db_init } from "@/database";
import { session_init } from "@/session";

import { shopApp } from "./shopApp";
import { distributorApp } from "./distributorApp";


// import { init_pp } from "@/services/paymentGateways/paypal.gateway";
// import { init_mpesa } from "@/services/paymentGateways/mpesa.gateway";

declare module "express-session" {
    interface SessionData {
        user_id: number,
        role: string
    }
};

const mainApp: Application = express();

// 3rd Party Middlewares
mainApp.use(morgan("combined"));
mainApp.use(express.urlencoded({ extended: true }));
mainApp.use(express.json());
mainApp.use(helmet());
mainApp.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
mainApp.use(cors({ origin: "http://localhost:3001", credentials: true }));

// Initialize DB
db_init();

// Intialize Payment Processors
// init_pp(config.paypal.client_id, config.paypal.client_secret);

// init_mpesa(config.mpesa.consumer_key, config.mpesa.consumer_secret, config.mpesa.business_short_code, config.mpesa.pass_key);

// Initialize Session
const session = session_init();
if (!session) process.exit();
mainApp.use(session);

// Subdomain Routing
mainApp.use(vhost(`shop.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, shopApp));
mainApp.use(vhost(`distributor.${config.platform === 'development' ? config.dev_domain : config.prod_domain}`, distributorApp));

mainApp.listen(config.serverPort, config.serverHost, () => {
    console.log("[+] Server configured & started successfully...");
});