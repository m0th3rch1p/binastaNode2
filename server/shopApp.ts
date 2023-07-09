import express from 'express';
import path from 'path';

import productRoutes from "@/routes/shop/products.routes";
import productCategoryRoutes from "@/routes/shop/productCategories.routes";
import orderRoutes from "@/routes/shop/orders.routes";
import authRoutes from "@/routes/shop/auth.routes";
import addressRoutes from "@/routes/shop/addresses.routes";
import subscriberRoutes from "@/routes/shop/subscriber.routes";

const shopApp: express.Application = express();

shopApp.use(express.static(path.join(__dirname, 'front', 'shop', 'build')));

shopApp.use("/auth", authRoutes);
shopApp.use("/product_categories", productCategoryRoutes);
shopApp.use("/products", productRoutes);
shopApp.use("/addresses", addressRoutes);
shopApp.use("/orders", orderRoutes);
shopApp.use("/subscribe", subscriberRoutes);

shopApp.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front', 'shop', 'build', 'index.html'))
});

export { shopApp };