"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributorShopApp = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const products_routes_1 = __importDefault(require("./routes/distributorShop/products.routes"));
const productCategories_routes_1 = __importDefault(require("./routes/distributorShop/productCategories.routes"));
const orders_routes_1 = __importDefault(require("./routes/distributorShop/orders.routes"));
const auth_routes_1 = __importDefault(require("./routes/distributorShop/auth.routes"));
const addresses_routes_1 = __importDefault(require("./routes/distributorShop/addresses.routes"));
const distributorShopApp = (0, express_1.default)();
exports.distributorShopApp = distributorShopApp;
distributorShopApp.use(express_1.default.static(path_1.default.join(__dirname, 'front', 'distributor-shop', 'build')));
distributorShopApp.use("/auth", auth_routes_1.default);
distributorShopApp.use("/product_categories", productCategories_routes_1.default);
distributorShopApp.use("/products", products_routes_1.default);
distributorShopApp.use("/addresses", addresses_routes_1.default);
distributorShopApp.use("/orders", orders_routes_1.default);
distributorShopApp.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'front', 'distributor-shop', 'build', 'index.html'));
});
