
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorOrderProduct {
    id?: number,
    distributor_id?: number,
    product_variation_id?: number,
    quantity?: number,
    stock?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorOrderProductReq extends Request<{id: IDistributorOrderProduct["id"]}, any, any> {};
export interface IAddDistributorOrderProductReq extends Request<core.Params, IDistributorOrderProduct, any> {};
export interface IUpdateDistributorOrderProductReq extends Request <{id: IDistributorOrderProduct["id"]}, IDistributorOrderProduct, any>{};