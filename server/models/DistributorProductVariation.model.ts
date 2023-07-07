
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorProductVariation {
    id?: number,
    product_variation_id?: number,
    product_id?: number,
    variation?: string,
    buy_price?: number,
    stock?: number,
    sold?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorProductVariationReq extends Request<{id: IDistributorProductVariation["id"]}, any, any> {};
export interface IAddDistributorProductVariationReq extends Request<core.Params, IDistributorProductVariation, any> {};
export interface IUpdateDistributorProductVariationReq extends Request <{id: IDistributorProductVariation["id"]}, IDistributorProductVariation, any>{};