
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorUserOrder {
    id?: number,
    distributor_user_id?: number,
    distributor_user_address_id?: number,
    ref?: string,
    status?: "pending" | "delivered",
    amount?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorUserOrderReq extends Request<{id: IDistributorUserOrder["id"]}, any, any> {};
export interface IAddDistributorUserOrderReq extends Request<core.Params, IDistributorUserOrder, any> {};
export interface IUpdateDistributorUserOrderReq extends Request <{id: IDistributorUserOrder["id"]}, IDistributorUserOrder, any>{};