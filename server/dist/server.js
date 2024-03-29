"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import morgan from "morgan";
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const vhost_1 = __importDefault(require("vhost"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("./config"));
const database_1 = require("./database");
const session_1 = require("./session");
const logger_1 = __importDefault(require("./helpers/logger"));
const shopApp_1 = require("./shopApp");
const adminApp_1 = require("./adminApp");
const distributorApp_1 = require("./distributorApp");
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const blog_routes_1 = __importDefault(require("./routes/blog.routes"));
const message_routes_1 = __importDefault(require("./routes/message.routes"));
const distributorShopApp_1 = require("./distributorShopApp");
;
const mainApp = (0, express_1.default)();
// 3rd Party Middlewares
// mainApp.use(morgan("combined"));
mainApp.use(express_1.default.urlencoded({ extended: true }));
mainApp.use(express_1.default.json());
mainApp.use((0, helmet_1.default)());
mainApp.use((0, cors_1.default)());
// mainApp.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// mainApp.use(cors({ origin: "http://localhost:3001", credentials: true }));
// Initialize DB
(0, database_1.db_init)();
// Intialize Payment Processors
// init_pp(config.paypal.client_id, config.paypal.client_secret);
// init_mpesa(config.mpesa.consumer_key, config.mpesa.consumer_secret, config.mpesa.business_short_code, config.mpesa.pass_key);
// Initialize Session
const session = (0, session_1.session_init)();
if (!session)
    process.exit();
mainApp.use(session);
mainApp.use(express_1.default.static("productImages"));
mainApp.use(express_1.default.static("productCategories"));
mainApp.use(express_1.default.static("blogPosts"));
// Subdomain Routing
console.log("Platform", config_1.default.platform);
mainApp.use((0, vhost_1.default)(`shop.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, shopApp_1.shopApp));
mainApp.use((0, vhost_1.default)(`distributor.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, distributorApp_1.distributorApp));
mainApp.use((0, vhost_1.default)(`management.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, adminApp_1.adminApp));
mainApp.use((0, vhost_1.default)(`*.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, distributorShopApp_1.distributorShopApp));
mainApp.use("/products", products_routes_1.default);
mainApp.use("/blogs", blog_routes_1.default);
mainApp.use("/messages", message_routes_1.default);
mainApp.use(express_1.default.static(path_1.default.resolve(__dirname, 'front', 'main', 'build')));
mainApp.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'front', 'main', 'build', 'index.html'));
});
const httpsServer = https_1.default.createServer({
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, 'certs', 'key.pem'), 'utf8'),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, 'certs', 'cert.pem'), 'utf8'),
    hostname: config_1.default.serverHost
}, mainApp);
httpsServer.listen(config_1.default.serverPort, () => {
    logger_1.default.info("Https server running successfully");
});
