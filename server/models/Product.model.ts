
import { Request } from "express";
import * as core from 'express-serve-static-core';
import { IProductVariation } from "./ProductVariation.model";
import { Dictionary } from "lodash";
import { IProductImage } from "./ProductImage.model";
import { IDistributorProductVariation } from "./DistributorProductVariation.model";

export interface IProduct {
    id?: number,
    category_id?: number,
    categoryId?: number,
    category_name?: string,
    category_slug?: string,
    name?: string,
    slug?: string,
    variations?: string | string[] | Dictionary<IProductVariation[]> | IProductVariation[] | IDistributorProductVariation[],
    images?: string | string[] | Dictionary<IProductImage[]> | IProductImage[],
    related?: Dictionary<IProduct[]> | IProduct[],
    description?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetProductReq extends Request<{id: IProduct["id"]}, any, any> {};
export interface IAddProductReq extends Request<core.Params, IProduct, any> {};
export interface IUpdateProductReq extends Request <{id: IProduct["id"]}, IProduct, any>{};