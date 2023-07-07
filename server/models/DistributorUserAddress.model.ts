
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorUserAddress {
    id?: number,
    distributor_user_id?: number,
    address?: string,
    phone_number?: string,
    default?: boolean,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorUserAddressReq extends Request<{id: IDistributorUserAddress["id"]}, any, any> {};
export interface IAddDistributorUserAddressReq extends Request<core.Params, IDistributorUserAddress, any> {};
export interface IUpdateDistributorUserAddressReq extends Request <{id: IDistributorUserAddress["id"]}, IDistributorUserAddress, any>{};