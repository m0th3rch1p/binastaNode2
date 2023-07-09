
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IShopSubscriber {
    id?: number,
    email?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetShopSubscriberReq extends Request<{id: IShopSubscriber["id"]}, any, any> {};
export interface IAddShopSubscriberReq extends Request<core.Params, IShopSubscriber, any> {};
export interface IUpdateShopSubscriberReq extends Request <{id: IShopSubscriber["id"]}, IShopSubscriber, any>{};