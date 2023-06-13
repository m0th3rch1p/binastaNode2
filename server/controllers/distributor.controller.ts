import { IAddDistributorReq, IAuthDistributorReq, IGetDistributorReq, IUpdateDistributorReq } from "@/models/Distributor.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributor } from "@/models/Distributor.model";
import { makeRef } from "@/helpers/StrHelper";
import bcrypt from "bcrypt";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributors , error} = await execQuery<IDistributor[]>("distributors", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributors" });
    } else if (distributors) {
      res.status(200).json({ distributors })
    }
};

export const store: RequestHandler = async (req: IAddDistributorReq, res: Response) => {
  const distributor: IDistributor = req.body;
  
  distributor.referalCode = makeRef(6);
  const { response: refResponse, error: refError } = await execQuery<IDistributor[][]>("distributors", "SELELECTBYCOL", ["referal_code"], [distributor.referalCode]);
  if (refError) {
      res.status(500).json({ message: 'error fetching distributors' });
  } else if (refResponse && !refResponse[0].length) {
    const distributor: IDistributor = req.body;
    distributor.password = await bcrypt.hash(<string>distributor.password, 10);

    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("distributors", "INSERT", ["country_id", "store_name", "full_name", "email", "password", "phone_number", "gender", "parent_id"], [distributor.countryId, distributor.storeName, distributor.fullName, distributor.email, distributor.password, distributor.phoneNumber, distributor.gender, distributor.parent]);
    
    req.session.user_id = response?.insertId;
    req.session.role = "distributor";

    if (error) {
      res.status(500).json({ message: "error registering distributor" });
    } else if (response) {
      res.status(200).json({ status: response.affectedRows });
    }
  }
};

export const authenticate: RequestHandler = async (req: IAuthDistributorReq, res: Response) => {
  const distributor: IDistributor = req.body;
  const { response, error } = await execQuery<IDistributor[][]>("distributors", "AUTH", null, [distributor.email]);

  if (error) {
    res.status(500).json({ message: "invalid emails / password combination" })
  } else {
      const [ userArr ] = response as IDistributor[][];
      req.session.user_id = userArr[0].id;
      req.session.role = "distributor";

      res.status(200).json({ status: true });
  }
};

//@ts-expect-error
export const verify: RequestHandler = async (req: IGetDistributorReq, res: Response) => {
  const { response, error } = await execQuery<{affectedRows: number}>("distributors", "UPDATEBYID", ["verified"], [true]);
  if (error) {
    res.status(500).json({ message: "error verifying distributor" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributors", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributors" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributors", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributors" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};