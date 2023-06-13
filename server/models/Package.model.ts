
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IPackage {
    id?: number,
    packageCategoryId?: number,
    name?:string,
    slug?: string,
    amount?: number,
    description: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetPackageReq extends Request<{id: IPackage["id"]}, any, any> {};
export interface IAddPackageReq extends Request<core.Params, IPackage, any> {};
export interface IUpdatePackageReq extends Request <{id: IPackage["id"]}, IPackage, any>{};