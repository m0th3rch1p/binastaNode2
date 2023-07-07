
import { Request } from "express";
import * as core from 'express-serve-static-core';
import { IProductVariation } from "./ProductVariation.model";

export interface IDistributorOrder {
    id?: number,
    distributor_id?: number,
    distributor_address_id?: number,
    ref?: string,
    status?: "pending" | "delivered",
    variations?: IProductVariation[] | null,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorOrderReq extends Request<{id: IDistributorOrder["id"]}, any, any> {};
export interface IAddDistributorOrderReq extends Request<core.Params, IDistributorOrder, any> {};
export interface IUpdateDistributorOrderReq extends Request <{id: IDistributorOrder["id"]}, IDistributorOrder, any>{};