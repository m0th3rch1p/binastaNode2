
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IProductCategory {
    id?: number,
    name?: string,
    slug?: string,
    image_path?: string,
    ext?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetProductCategoryReq extends Request<{id: IProductCategory["id"]}, any, any> {};
export interface IGetSlugProductCategoryReq extends Request<{id: IProductCategory["slug"]}, any, any> {};
export interface IAddProductCategoryReq extends Request<core.Params, IProductCategory, any> {};
export interface IUpdateProductCategoryReq extends Request <{id: IProductCategory["id"]}, IProductCategory, any>{};