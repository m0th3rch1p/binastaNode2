
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributor {
    id?: number,
    countryId?: number,
    storeName?: string,
    fullName?: string,
    email?: string,
    password?: string,
    phoneNumber?: string,
    gender?: "male" | "female",
    rewardPoints?: number,
    status?: "pending" | "active" | "suspended" | "disabled",
    referalCode?: string,
    verified: boolean,
    parent: IDistributor["id"],
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorReq extends Request<{id: IDistributor["id"]}, any, any> {};
export interface IAddDistributorReq extends Request<core.Params, IDistributor, any> {};
export interface IAuthDistributorReq extends Request<core.Params, {email: string, password: string}, any>{};
export interface IUpdateDistributorReq extends Request <{id: IDistributor["id"]}, IDistributor, any>{};