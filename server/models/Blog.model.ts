
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IBlog {
    id?: number,
    blog_category_id?: number,
    title?: string,
    slug?: string,
    description?: string,
    post?: string,
    image_path?: string,
    ext?: string,
    linkPath?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetBlogReq extends Request<{id: IBlog["id"]}, any, any> {};
export interface IAddBlogReq extends Request<core.Params, IBlog, any> {};
export interface IUpdateBlogReq extends Request <{id: IBlog["id"]}, IBlog, any>{};