"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var vhost_1 = __importDefault(require("vhost"));
var config_1 = __importDefault(require("@/config"));
var database_1 = require("@/database");
var session_1 = require("@/session");
var shopApp_1 = require("./shopApp");
var adminApp_1 = require("./adminApp");
var distributorApp_1 = require("./distributorApp");
var products_routes_1 = __importDefault(require("@/routes/products.routes"));
var blog_routes_1 = __importDefault(require("@/routes/blog.routes"));
;
var mainApp = express_1["default"]();
// 3rd Party Middlewares
mainApp.use(morgan_1["default"]("combined"));
mainApp.use(express_1["default"].urlencoded({ extended: true }));
mainApp.use(express_1["default"].json());
mainApp.use(helmet_1["default"]());
mainApp.use(cors_1["default"]());
// mainApp.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// mainApp.use(cors({ origin: "http://localhost:3001", credentials: true }));
// Initialize DB
database_1.db_init();
// Intialize Payment Processors
// init_pp(config.paypal.client_id, config.paypal.client_secret);
// init_mpesa(config.mpesa.consumer_key, config.mpesa.consumer_secret, config.mpesa.business_short_code, config.mpesa.pass_key);
// Initialize Session
var session = session_1.session_init();
if (!session)
    process.exit();
mainApp.use(session);
mainApp.use(express_1["default"].static("productImages"));
mainApp.use(express_1["default"].static("productCategories"));
mainApp.use(express_1["default"].static("blogPosts"));
// Subdomain Routing
mainApp.use(vhost_1["default"]("shop." + (config_1["default"].platform === 'development' ? config_1["default"].dev_domain : config_1["default"].prod_domain), shopApp_1.shopApp));
mainApp.use(vhost_1["default"]("distributor." + (config_1["default"].platform === 'development' ? config_1["default"].dev_domain : config_1["default"].prod_domain), distributorApp_1.distributorApp));
mainApp.use(vhost_1["default"]("management." + (config_1["default"].platform === 'development' ? config_1["default"].dev_domain : config_1["default"].prod_domain), adminApp_1.adminApp));
mainApp.use("/products", products_routes_1["default"]);
mainApp.use("/blogs", blog_routes_1["default"]);
mainApp.listen(config_1["default"].serverPort, config_1["default"].serverHost, function () {
    console.log("[+] Server configured & started successfully...");
});
