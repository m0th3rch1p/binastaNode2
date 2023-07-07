
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IProductVariation {
    id?: number,
    product_id: number,
    variation?: string,
    buy_price?: number,
    sale_rice?: number,
    wholesale_price?: number,
    recommended_price?: number,
    wholesale_min?: number,
    stock?: number,
    sold?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetProductVariationReq extends Request<{id: IProductVariation["id"]}, any, any> {};
export interface IAddProductVariationReq extends Request<core.Params, IProductVariation, any> {};
export interface IUpdateProductVariationReq extends Request <{id: IProductVariation["id"]}, IProductVariation, any>{};