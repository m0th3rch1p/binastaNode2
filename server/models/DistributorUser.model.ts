
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorUser {
    id?: number,
    distributor_id?: number,
    email?: string,
    password?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorUserReq extends Request<{id: IDistributorUser["id"]}, any, any> {};
export interface IAddDistributorUserReq extends Request<core.Params, IDistributorUser, any> {};
export interface IUpdateDistributorUserReq extends Request <{id: IDistributorUser["id"]}, IDistributorUser, any>{};