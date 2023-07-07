import express from 'express';
import path from 'path';

import productsRoutes from "@/routes/distributorShop/products.routes";
import productCategoryRoutes from "@/routes/distributorShop/productCategories.routes";
import orderRoutes from "@/routes/distributorShop/orders.routes";
import authRoutes from "@/routes/distributorShop/auth.routes";
import addressRoutes from "@/routes/distributorShop/addresses.routes";


const distributorShopApp: express.Application = express();

distributorShopApp.use(express.static(path.join(__dirname, 'front', 'distributor-shop', 'build')));

distributorShopApp.use("/auth", authRoutes);
distributorShopApp.use("/product_categories", productCategoryRoutes);
distributorShopApp.use("/products", productsRoutes);
distributorShopApp.use("/addresses", addressRoutes);
distributorShopApp.use("/orders", orderRoutes);

distributorShopApp.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front', 'distributor-shop', 'build', 'index.html'))
});

export { distributorShopApp };