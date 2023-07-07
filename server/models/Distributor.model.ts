
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributor {
    id?: number,
    country_id?: number,
    store_name?: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    phone_number?: string,
    gender?: "male" | "female",
    reward_points?: number,
    status?: "pending" | "active" | "suspended" | "disabled",
    referal_code?: string,
    verified: boolean,
    parent: IDistributor["id"] | null,
    child_count?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorReq extends Request<{id: IDistributor["id"]}, any, any> {};
export interface IAddDistributorReq extends Request<core.Params, IDistributor, any> {};
export interface IAuthDistributorReq extends Request<core.Params, {email: string, password: string}, any>{};
export interface IUpdateDistributorReq extends Request <{id: IDistributor["id"]}, IDistributor, any>{};