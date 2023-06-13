
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorAddress {
    id?: number,
    distributorId?: number,
    address?: string,
    phoneNumber?: string,
    default: boolean,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorAddressReq extends Request<{id: IDistributorAddress["id"]}, any, any> {};
export interface IAddDistributorAddressReq extends Request<core.Params, IDistributorAddress, any> {};
export interface IUpdateDistributorAddressReq extends Request <{id: IDistributorAddress["id"]}, IDistributorAddress, any>{};