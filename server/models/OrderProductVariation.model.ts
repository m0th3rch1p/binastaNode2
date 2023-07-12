
import { Request } from "express";
import * as core from 'express-serve-static-core';
import { IProductVariation } from "./ProductVariation.model";

export interface IOrderProductVariation {
    id?: number,
    order_id?: number,
    product_variation_id?: number,
    variation?: string,
    product_name?: string,
    product_image?: string,
    quantity?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetOrderProductVariationReq extends Request<{id: IOrderProductVariation["id"]}, any, any> {};
export interface IAddOrderProductVariationReq extends Request<core.Params, IOrderProductVariation, any> {};
export interface IUpdateOrderProductVariationReq extends Request <{id: IOrderProductVariation["id"]}, IOrderProductVariation, any>{};