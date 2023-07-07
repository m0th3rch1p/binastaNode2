
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface IDomain {
    id?: number,
    distributor_id?: number,
    domain?: string,
    created_at?: string,
    updated_at?: string
};

export interface IGetDomainReq extends Request<{id: IDomain["id"]}, any, any> {};
export interface IAddDomainReq extends Request<core.Params, IDomain, any> {};
export interface IUpdateDomainReq extends Request <{id: IDomain["id"]}, IDomain, any>{};