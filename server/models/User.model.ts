
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IUser {
    id?: number,
    email?: string,
    password?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetUserReq extends Request<{id: IUser["id"]}, any, any> {};
export interface IAddUserReq extends Request<core.Params, IUser, any> {};
export interface IUpdateUserReq extends Request <{id: IUser["id"]}, IUser, any>{};