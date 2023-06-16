
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IProductImage {
    id?: number,
    productId?: number,
    pathUrl?: string,
    ext?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetProductImageReq extends Request<{id: IProductImage["id"]}, any, any> {};
export interface IAddProductImageReq extends Request<core.Params, IProductImage, any> {};
export interface IUpdateProductImageReq extends Request <{id: IProductImage["id"]}, IProductImage, any>{};