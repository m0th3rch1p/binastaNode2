
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDistributorOrderPackage {
    id?: number,
    distributorOrderId?: number,
    packageId?: number,
    quantity?: number,
    amount?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGetDistributorOrderPackageReq extends Request<{id: IDistributorOrderPackage["id"]}, any, any> {};
export interface IAddDistributorOrderPackageReq extends Request<core.Params, IDistributorOrderPackage, any> {};
export interface IUpdateDistributorOrderPackageReq extends Request <{id: IDistributorOrderPackage["id"]}, IDistributorOrderPackage, any>{};