import fs from 'fs';
import path from 'path';
import { pluralize } from '@/helpers/StrHelper';

let modelName: string | undefined = process.env.npm_config_model;
let controllerName : string | undefined = process.env.npm_config_name;
let tableName: string | undefined = process.env.npm_config_table;
if (!modelName || !controllerName || !tableName) {
    console.error("Usage: create_controller --name=controllerName --model=modelName --table=tableName\n");
    
} else {
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    controllerName = controllerName.charAt(0).toLowerCase() + controllerName.slice(1);

    const fileName = `${controllerName}.controller.ts`;
    const filePath = path.join(__dirname, fileName);

    fs.open(filePath, 'wx', (err, fd) => {
      if (err) {
        if (err.code === 'EEXIST') {
          console.log('Model file already exists.');
        } else {
          console.error(`Error opening migration file: ${err}`);
        }
        return;
      }

      const stream = fs.createWriteStream('', {fd});

      stream.write(`import { IAdd${modelName}Req, IGet${modelName}Req, IUpdate${modelName}Req } from "@/models/${modelName}.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { I${modelName} } from "@/models/${modelName}.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: ${pluralize(<string>controllerName)} , error} = await execQuery<I${modelName}[]>("${tableName}", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching ${pluralize(<string>modelName)}" });
    } else if (${pluralize(<string>controllerName)}) {
      res.status(200).json({ ${pluralize(<string>controllerName)} })
    }
};

export const store: RequestHandler = async (req: IAdd${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "INSERT", [], []);
  
  if (error) {
    res.status(500).json({ message: "error fetching ${pluralize(<string>modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdate${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating ${pluralize(<string>modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGet${modelName}Req, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("${tableName}", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting ${pluralize(<string>modelName)}" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};`);

      stream.end();

      stream.on('finish', () => {
        console.log('Model file created successfully.');
        fs.close(fd, (closeErr) => {
          if (closeErr) {
            console.error(`Error closing model file: ${closeErr}`);
          }
        });
      });

      stream.on('error', (err) => {
        console.error(`Error writing to model file: ${err}`);
        fs.close(fd, (closeErr) => {
          if (closeErr) {
            console.error(`Error closing model file: ${closeErr}`);
          }
        });
      });
    });

}

