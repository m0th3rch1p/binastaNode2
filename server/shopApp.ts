import express from 'express';

import productRoutes from "@/routes/shop/products.routes";
import productCategoryRoutes from "@/routes/shop/productCategories.routes";
import orderRoutes from "@/routes/shop/orders.routes";
import authRoutes from "@/routes/shop/auth.routes";
import addressRoutes from "@/routes/shop/addresses.routes";

const shopApp: express.Application = express();

shopApp.use("/auth", authRoutes);
shopApp.use("/product_categories", productCategoryRoutes);
shopApp.use("/products", productRoutes);
shopApp.use("/addresses", addressRoutes);
shopApp.use("/orders", orderRoutes);
export { shopApp };