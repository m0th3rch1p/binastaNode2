import bcrypt from 'bcrypt';
import { IAddDistributorUserReq, IGetDistributorUserReq, IUpdateDistributorUserReq } from "@/models/DistributorUser.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUser } from "@/models/DistributorUser.model";

import * as distributorUserServices from "@/services/distribributorUsers.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributorusers , error} = await execQuery<IDistributorUser[]>("distributor_users", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributorusers" });
    } else if (distributorusers) {
      res.status(200).json({ distributorusers })
    }
};

export const fetchDistributorUsers: RequestHandler = async (req: Request, res: Response) => {
  const users = await distributorUserServices.fetchDistributorUsers("distributor", req.session.user_id as number);
  if (!users) {
    res.status(500).json({ message: "error fetching users" });
    return;
  }

  const stats = await distributorUserServices.fetchDistributorUsersStat("distributor", req.session.user_id as number);

  res.status(200).json({ users, stats });
};

export const register: RequestHandler = async (req: IAddDistributorUserReq, res: Response) => {
  const distributorUser: IDistributorUser = req.body;
  distributorUser.distributor_id = req.session.tenant_id;
  
  const registrationResults = await distributorUserServices.registerDistributorUser(distributorUser);
  if (!registrationResults || !registrationResults.affectedRows) {
    res.status(422).json({ message: "Invalid credentials" });
    return;
  }

  req.session.user_id = registrationResults.insertId;
  req.session.role = "user";
  res.status(200).json({ status: registrationResults.affectedRows });
};

export const authenticate: RequestHandler = async (req: Request, res: Response) => {
  const distributorUser: IDistributorUser = req.body;
  distributorUser.distributor_id = req.session.tenant_id;

  const authenticationResults = await distributorUserServices.authenticateDistributorUser(distributorUser);
  if (!authenticationResults || !authenticationResults.length) {
    res.status(422).json({ message: "Invalid credentials" });
    return;
  }

  req.session.user_id = authenticationResults[0].id;
  req.session.role = "user";
  res.status(200).json({ status: true });
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