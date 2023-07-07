
import { Request, RequestHandler, Response } from "express";
import { Client } from '@/types/common.types';

import * as distributorShopServices from "@/services/distributorShop.services";

export const fetchAllDistributorShopProducts: RequestHandler = async (req: Request, res: Response) => {
    const products = await distributorShopServices.fetchDistributorProducts("user", req.session.tenant_id as number, parseInt(req.query.per_page as string ?? "10"), parseInt(req.query.offset as string ?? "0"));
    if (!products) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    }

    res.status(200).json({ products });
}