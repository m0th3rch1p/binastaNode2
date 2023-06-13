
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorOrder {
    id?: number,
    distributorId?: number,
    distributorAddressId?: number,
    ref?: string,
    status?: "pending" | "delivered"
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorOrderReq extends Request<{id: IDistributorOrder["id"]}, any, any> {};
export interface IAddDistributorOrderReq extends Request<core.Params, IDistributorOrder, any> {};
export interface IUpdateDistributorOrderReq extends Request <{id: IDistributorOrder["id"]}, IDistributorOrder, any>{};