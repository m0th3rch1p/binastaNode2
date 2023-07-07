import express from "express";
import path from "path";

import authRoutes from "@/routes/distributors/auth.routes";
import countryRoutes from "@/routes/distributors/country.routes";
import orderRoutes from "@/routes/distributors/orders.routes";
import productRoutes from "@/routes/distributors/products.routes";
import addressesRoutes from "@/routes/distributors/addresses.routes";
import customerAddressRoutes from "@/routes/distributors/customerAddresses.routes";
import customerOrdersRoutes from "@/routes/distributors/customerOrders.routes";
import distributorShopRoutes from "@/routes/distributors/distributor_shop_products.routes";
import customerRoutes from "@/routes/distributors/customers.routes";


const distributorApp: express.Application = express();

distributorApp.use(express.static(path.join(__dirname, 'front', 'distributor', 'build')));

distributorApp.use("/auth", authRoutes);
distributorApp.use("/countries", countryRoutes);
distributorApp.use("/products", productRoutes);
distributorApp.use("/orders", orderRoutes);
distributorApp.use("/shop_products", distributorShopRoutes);
distributorApp.use("/addresses", addressesRoutes);
distributorApp.use("/customer_addresses", customerAddressRoutes);
distributorApp.use("/customer_orders", customerOrdersRoutes);
distributorApp.use("/customers", customerRoutes);

distributorApp.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front', 'distributor', 'build', 'index.html'))
});
export { distributorApp };