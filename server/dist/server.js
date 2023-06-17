"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const vhost_1 = __importDefault(require("vhost"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const database_1 = require("./database");
const session_1 = require("./session");
const shopApp_1 = require("./shopApp");
const adminApp_1 = require("./adminApp");
const distributorApp_1 = require("./distributorApp");
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const blog_routes_1 = __importDefault(require("./routes/blog.routes"));
;
const mainApp = (0, express_1.default)();
// 3rd Party Middlewares
mainApp.use((0, morgan_1.default)("combined"));
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
mainApp.use((0, vhost_1.default)(`shop.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, shopApp_1.shopApp));
mainApp.use((0, vhost_1.default)(`distributor.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, distributorApp_1.distributorApp));
mainApp.use((0, vhost_1.default)(`management.${config_1.default.platform === 'development' ? config_1.default.dev_domain : config_1.default.prod_domain}`, adminApp_1.adminApp));
mainApp.use("/products", products_routes_1.default);
mainApp.use("/blogs", blog_routes_1.default);
mainApp.use(express_1.default.static(path_1.default.join(__dirname, 'builds', 'front', 'build')));
mainApp.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'builds', 'front', 'build', 'index.html'));
});
mainApp.listen(config_1.default.serverPort, () => {
    console.log("[+] Server configured & started successfully...");
});
