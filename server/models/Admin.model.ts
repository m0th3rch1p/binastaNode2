
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IAdmin {
    id?: number,
    email?: string,
    password?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetAdminReq extends Request<{id: IAdmin["id"]}, any, any> {};
export interface IAddAdminReq extends Request<core.Params, IAdmin, any> {};
export interface IUpdateAdminReq extends Request <{id: IAdmin["id"]}, IAdmin, any>{};