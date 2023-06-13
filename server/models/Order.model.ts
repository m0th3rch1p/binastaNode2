
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IOrder {
    id?: number,
    userId?: number,
    userAddressId?: number,
    ref?: string,
    status?: "pending" | "paid" | "delivered",
    amount?: number,
    discountAmount?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetOrderReq extends Request<{id: IOrder["id"]}, any, any> {};
export interface IAddOrderReq extends Request<core.Params, IOrder, any> {};
export interface IUpdateOrderReq extends Request <{id: IOrder["id"]}, IOrder, any>{};