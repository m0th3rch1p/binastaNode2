
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface ICountry {
    id?: number,
    name?: string,
    slug?: string,
    countryCode?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetCountryReq extends Request<{id: ICountry["id"]}, any, any> {};
export interface IAddCountryReq extends Request<core.Params, ICountry, any> {};
export interface IUpdateCountryReq extends Request <{id: ICountry["id"]}, ICountry, any>{};