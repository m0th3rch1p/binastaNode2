import { IAddDistributorAddressReq, IGetDistributorAddressReq, IUpdateDistributorAddressReq } from "@/models/DistributorAddress.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorAddress } from "@/models/DistributorAddress.model";

import * as distributorAddressServices from "@/services/distributorAddresses.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
  const addresses = await distributorAddressServices.fetchDistributorAddresses("admin");
  if (!addresses) {
    res.status(500).json({ message: "Error fetching distributor addresses" });
  } else {
    res.status(200).json({ addresses });
  }
};



export const fetchDistributorAddresses = async (req: Request, res: Response) => {
  const addresses = await distributorAddressServices.fetchDistributorAddresses(req.session.role === 'admin' ? "admin" : "distributor", req.session.role === 'admin' ? parseInt(req.params.id as string) : req.session.user_id);
  if (!addresses) {
    res.status(500).json({ message: "Error fetching distributor addresses" });
  } else {
    res.status(200).json({ addresses });
  }
};

export const store: RequestHandler = async (req: IAddDistributorAddressReq, res: Response) => {
  const distributorAddress: IDistributorAddress = req.body;
  distributorAddress.distributor_id = req.session.user_id;

  const results = await distributorAddressServices.store(distributorAddress);
  if (!results) {
    res.status(500).json({ message: "Error fetching distributor addresses" });
  } else {
    res.status(200).json({ status: results.affectedRows, id: results.insertId });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorAddressReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_addresses", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributoraddress" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorAddressReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_addresses", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributoraddress" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};