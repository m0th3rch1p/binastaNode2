
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IPackageCategory {
    id?: number,
    name?: string,
    slug?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetPackageCategoryReq extends Request<{id: IPackageCategory["id"]}, any, any> {};
export interface IGetPackageCategorySlugReq extends Request<{id: IPackageCategory["slug"]}>{};
export interface IAddPackageCategoryReq extends Request<core.Params, IPackageCategory, any> {};
export interface IUpdatePackageCategoryReq extends Request <{id: IPackageCategory["id"]}, IPackageCategory, any>{};