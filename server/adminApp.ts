import express from 'express';

const adminApp: express.Application = express();

import authRoutes from "@/routes/admins/auth.routes";
import blogCategoryRoutes from "@/routes/admins/blogCategories.routes";
import blogRoutes from "@/routes/admins/blog.routes";
import countryRoutes from "@/routes/admins/country.routes";
import distributorRoutes from "@/routes/admins/distributor.routes";
import distributorAddressRoutes from "@/routes/admins/distributorAddress.routes";
import distributorOrderRoutes from "@/routes/admins/distributorOrder.routes";
import orderRoutes from "@/routes/admins/order.routes";
import productCategoryRoutes from "@/routes/admins/productCategory.routes";
import productRoutes from "@/routes/admins/product.routes";
import userRoutes from "@/routes/admins/user.routes";
import userAddressRoutes from "@/routes/admins/userAddress.routes";

adminApp.use("/auth", authRoutes);
adminApp.use("/blog_categories", blogCategoryRoutes);
adminApp.use("/blogs", blogRoutes);
adminApp.use("/countries", countryRoutes);
adminApp.use("/distributors", distributorRoutes);
adminApp.use("/distributor_addresses", distributorAddressRoutes);
adminApp.use("/distributor_orders", distributorOrderRoutes);
adminApp.use("/orders", orderRoutes);
adminApp.use("/product_categories", productCategoryRoutes);
adminApp.use("/products", productRoutes);
adminApp.use("/users", userRoutes);
adminApp.use("/user_addresses", userAddressRoutes);

export { adminApp };