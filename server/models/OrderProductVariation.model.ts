
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IOrderProductVariation {
    id?: number,
    orderId?: number,
    productVariationId?: number,
    quantity?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetOrderProductVariationReq extends Request<{id: IOrderProductVariation["id"]}, any, any> {};
export interface IAddOrderProductVariationReq extends Request<core.Params, IOrderProductVariation, any> {};
export interface IUpdateOrderProductVariationReq extends Request <{id: IOrderProductVariation["id"]}, IOrderProductVariation, any>{};