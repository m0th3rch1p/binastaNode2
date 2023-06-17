"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const StrHelper_1 = require("@/helpers/StrHelper");
let modelName = process.env.npm_config_model;
let controllerName = process.env.npm_config_name;
let tableName = process.env.npm_config_table;
if (!modelName || !controllerName || !tableName) {
    console.error("Usage: create_controller --name=controllerName --model=modelName --table=tableName\n");
}
else {
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    controllerName = controllerName.charAt(0).toLowerCase() + controllerName.slice(1);
    const fileName = `${controllerName}.controller.ts`;
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
        stream.write(`import { IAdd${modelName}Req, IGet${modelName}Req, IUpdate${modelName}Req } from "@/models/${modelName}.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { I${modelName} } from "@/models/${modelName}.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: ${(0, StrHelper_1.pluralize)(controllerName)} , error} = await execQuery<I${modelName}[]>("${tableName}", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching ${(0, StrHelper_1.pluralize)(modelName)}" });
    } else if (${(0, StrHelper_1.pluralize)(controllerName)}) {
      res.status(200).json({ ${(0, StrHelper_1.pluralize)(controllerName)} })
    }
};

export const store: RequestHandler = async (req: IAdd${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "INSERT", [], []);
  
  if (error) {
    res.status(500).json({ message: "error fetching ${(0, StrHelper_1.pluralize)(modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdate${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating ${(0, StrHelper_1.pluralize)(modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGet${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting ${(0, StrHelper_1.pluralize)(modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};`);
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
