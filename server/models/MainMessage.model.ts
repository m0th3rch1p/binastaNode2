
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IMainMessage {
    id?: number,
    name?: string,
    email?: string,
    phone_number?: string,
    message?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetMainMessageReq extends Request<{id: IMainMessage["id"]}, any, any> {};
export interface IAddMainMessageReq extends Request<core.Params, IMainMessage, any> {};
export interface IUpdateMainMessageReq extends Request <{id: IMainMessage["id"]}, IMainMessage, any>{};