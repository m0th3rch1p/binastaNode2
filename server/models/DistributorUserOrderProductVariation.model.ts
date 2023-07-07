
import { Request } from "express";
import * as core from 'express-serve-static-core';
import { IProductImage } from "./ProductImage.model";
import { Dictionary } from "lodash";

export interface IDistributorUserOrderProductVariation {
    id?: number,
    variation?: string,
    product_id?: number,
    variation_id?: number,
    quantity?: number,
    created_at?: string,
    updated_at?: string,
    product_images?: IProductImage[] | Dictionary<IProductImage[]>
};

export interface IGetDistributorUserOrderProductVariationReq extends Request<{id: IDistributorUserOrderProductVariation["id"]}, any, any> {};
export interface IAddDistributorUserOrderProductVariationReq extends Request<core.Params, IDistributorUserOrderProductVariation, any> {};
export interface IUpdateDistributorUserOrderProductVariationReq extends Request <{id: IDistributorUserOrderProductVariation["id"]}, IDistributorUserOrderProductVariation, any>{};