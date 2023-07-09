"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopApp = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const products_routes_1 = __importDefault(require("./routes/shop/products.routes"));
const productCategories_routes_1 = __importDefault(require("./routes/shop/productCategories.routes"));
const orders_routes_1 = __importDefault(require("./routes/shop/orders.routes"));
const auth_routes_1 = __importDefault(require("./routes/shop/auth.routes"));
const addresses_routes_1 = __importDefault(require("./routes/shop/addresses.routes"));
const subscriber_routes_1 = __importDefault(require("./routes/shop/subscriber.routes"));
const shopApp = (0, express_1.default)();
exports.shopApp = shopApp;
shopApp.use(express_1.default.static(path_1.default.join(__dirname, 'front', 'shop', 'build')));
shopApp.use("/auth", auth_routes_1.default);
shopApp.use("/product_categories", productCategories_routes_1.default);
shopApp.use("/products", products_routes_1.default);
shopApp.use("/addresses", addresses_routes_1.default);
shopApp.use("/orders", orders_routes_1.default);
shopApp.use("/subscribe", subscriber_routes_1.default);
shopApp.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'front', 'shop', 'build', 'index.html'));
});
