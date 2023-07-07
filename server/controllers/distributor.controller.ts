import { IAddDistributorReq, IAuthDistributorReq, IGetDistributorReq, IUpdateDistributorReq } from "@/models/Distributor.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributor } from "@/models/Distributor.model";
import { makeRef } from "@/helpers/StrHelper";
import bcrypt from "bcrypt";
import * as distributorServices from "@/services/distributor.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const distributors = await distributorServices.fetchDistributors();
    if (!distributors) {
      res.status(500).json({ message: 'Error fetching distributors' });
    } else {
      res.status(200).json({ distributors });
    }
};

export const fetchDistributorById: RequestHandler = async (req: Request, res: Response) => {
  const distributor = await distributorServices.fetchDistributorById(parseInt(req.params.id as string));
  if (!distributor) {
    res.status(500).json({ message: 'Error fetching distributor' });
    return;
  } else if (!distributor.length){
    res.status(404).json({ message: 'Distributor not found' });
    return;
  }

  return res.status(200).json({ distributor: distributor[0] });
};

export const store: RequestHandler = async (req: IAddDistributorReq, res: Response) => {
  const distributor: IDistributor = req.body;
  
  distributor.referal_code = makeRef(6);
  const refResponse = await distributorServices.fetchDistributorBySlug(req.body.parent);

  if (refResponse !== null && refResponse[0]) {
    distributor.parent = refResponse[0].id;
  } else distributor.parent = null;

  distributor.password = await bcrypt.hash(<string>distributor.password, 10);
  const response = await distributorServices.registerDistributor(distributor);
  
  if (response && response.insertId) {
    req.session.user_id = response.insertId;
    req.session.role = "distributor";
    
    res.status(200).json({ status: response.affectedRows });
  } else {
    res.status(500).json({ message: "error registering distributor" });
  }
};

export const authenticate: RequestHandler = async (req: IAuthDistributorReq, res: Response) => {
  const distributor: IDistributor = req.body;
  const response = await distributorServices.authenticateDistributor(distributor);

  if (response && response[0]) {
    req.session.user_id = response[0].id;
    req.session.role = "distributor";

    res.status(200).json({ status: true });
  } else {
      res.status(500).json({ message: "invalid email / password combination" })
  }
};

//@ts-expect-error
export const verify: RequestHandler = async (req: IGetDistributorReq, res: Response) => {
  const verificationResponse = await distributorServices.verifyDistributor(req.body.id as number);

  if (!verificationResponse) {
    res.status(500).json({ message: "error verifying distributor" });
  } else if (verificationResponse) {
    res.status(200).json({ status: verificationResponse.affectedRows });
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

export const logout: RequestHandler = async () => {
  
}