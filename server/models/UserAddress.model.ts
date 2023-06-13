
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IUserAddress {
    id?: number,
    userId?: number,
    address?: string,
    phoneNumber?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetUserAddressReq extends Request<{id: IUserAddress["id"]}, any, any> {};
export interface IAddUserAddressReq extends Request<core.Params, IUserAddress, any> {};
export interface IUpdateUserAddressReq extends Request <{id: IUserAddress["id"]}, IUserAddress, any>{};