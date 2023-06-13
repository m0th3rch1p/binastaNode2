import { Router } from "express";
import * as countriesController from "@/controllers/countries.controller";

const router = Router();
router.get("/", countriesController.fetchDistributorCountries);
router.get("/:slug", countriesController.fetchDistributorCountryBySlug);

export default router;