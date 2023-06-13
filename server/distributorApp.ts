import express from "express";

import countryRoutes from "@/routes/distributors/country.routes";
import orderRoutes from "@/routes/distributors/orders.routes";
import packageCategoriesRoutes from "@/routes/distributors/packageCategories.routes";
import packageRoutes from "@/routes/distributors/packages.routes";

const distributorApp: express.Application = express();

distributorApp.use("/countries", countryRoutes);
distributorApp.use("/orders", orderRoutes);
distributorApp.use("/package_categories", packageCategoriesRoutes);
distributorApp.use("/packages", packageRoutes);

export { distributorApp };