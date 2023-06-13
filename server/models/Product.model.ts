
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IProduct {
    id?: number,
    categoryId?: number,
    category_name?: string,
    category_slug?: string,
    name?: string,
    slug?: string,
    variations?: string | string[],
    images?: string | string[],
    description?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetProductReq extends Request<{id: IProduct["id"]}, any, any> {};
export interface IAddProductReq extends Request<core.Params, IProduct, any> {};
export interface IUpdateProductReq extends Request <{id: IProduct["id"]}, IProduct, any>{};