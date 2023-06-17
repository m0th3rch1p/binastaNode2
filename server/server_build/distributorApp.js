"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributorApp = void 0;
const express_1 = __importDefault(require("express"));
const country_routes_1 = __importDefault(require("@/routes/distributors/country.routes"));
const orders_routes_1 = __importDefault(require("@/routes/distributors/orders.routes"));
const packageCategories_routes_1 = __importDefault(require("@/routes/distributors/packageCategories.routes"));
const packages_routes_1 = __importDefault(require("@/routes/distributors/packages.routes"));
const distributorApp = (0, express_1.default)();
exports.distributorApp = distributorApp;
distributorApp.use("/countries", country_routes_1.default);
distributorApp.use("/orders", orders_routes_1.default);
distributorApp.use("/package_categories", packageCategories_routes_1.default);
distributorApp.use("/packages", packages_routes_1.default);
