import { Router } from "express";
import * as distributorShopController from "@/controllers/distributorShop.controller";
import { verifyDomain } from "@/middlewares/domains.middleware";
const router = Router();
router.get("/", [verifyDomain], distributorShopController.fetchAllDistributorShopProducts);
export default router;