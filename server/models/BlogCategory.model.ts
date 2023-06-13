
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IBlogCategory {
    id?: number,
    name?: string,
    slug?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetBlogCategoryReq extends Request<{id: IBlogCategory["id"]}, any, any> {};
export interface IAddBlogCategoryReq extends Request<core.Params, IBlogCategory, any> {};
export interface IUpdateBlogCategoryReq extends Request <{id: IBlogCategory["id"]}, IBlogCategory, any>{};