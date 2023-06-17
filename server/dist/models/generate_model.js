"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let modelName = process.env.npm_config_model;
if (!modelName) {
    console.error("Usage: create_model --model=modelName\n");
}
else {
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    const fileName = `${modelName}.model.ts`;
    const filePath = path_1.default.join(__dirname, fileName);
    fs_1.default.open(filePath, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log('Model file already exists.');
            }
            else {
                console.error(`Error opening migration file: ${err}`);
            }
            return;
        }
        const stream = fs_1.default.createWriteStream('', { fd });
        stream.write(`
import { Request } from "express";
import * as core from 'express-serve-static-core';

export interface I${modelName} {
    id?: number,
    created_at?: string,
    updated_at?: string
};

export interface IGet${modelName}Req extends Request<{id: I${modelName}["id"]}, any, any> {};
export interface IAdd${modelName}Req extends Request<core.Params, I${modelName}, any> {};
export interface IUpdate${modelName}Req extends Request <{id: I${modelName}["id"]}, I${modelName}, any>{};`);
        stream.end();
        stream.on('finish', () => {
            console.log('Model file created successfully.');
            fs_1.default.close(fd, (closeErr) => {
                if (closeErr) {
                    console.error(`Error closing model file: ${closeErr}`);
                }
            });
        });
        stream.on('error', (err) => {
            console.error(`Error writing to model file: ${err}`);
            fs_1.default.close(fd, (closeErr) => {
                if (closeErr) {
                    console.error(`Error closing model file: ${closeErr}`);
                }
            });
        });
    });
}
