import bcrypt from 'bcrypt';
import { IAddDistributorUserReq, IGetDistributorUserReq, IUpdateDistributorUserReq } from "@/models/DistributorUser.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUser } from "@/models/DistributorUser.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributorusers , error} = await execQuery<IDistributorUser[]>("distributor_users", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributorusers" });
    } else if (distributorusers) {
      res.status(200).json({ distributorusers })
    }
};

export const store: RequestHandler = async (req: IAddDistributorUserReq, res: Response) => {
  const distributorUser: IDistributorUser = req.body;

  distributorUser.password = await bcrypt.hash(<string>distributorUser.password, 10);
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_users", "INSERT", ["distributor_id", "email", "password"], [distributorUser.distributorId, distributorUser.email, distributorUser.password]);
  
  if (error) {
    res.status(500).json({ message: "error fetching distributor users" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorUserReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_users", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributorusers" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorUserReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_users", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributorusers" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};