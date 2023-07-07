import { IAddDistributorUserAddressReq, IGetDistributorUserAddressReq, IUpdateDistributorUserAddressReq } from "@/models/DistributorUserAddress.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUserAddress } from "@/models/DistributorUserAddress.model";

import * as distributorUserAddressServices from "@/services/distributorUserAddresses.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributoruseraddresses , error} = await execQuery<IDistributorUserAddress[]>("distributor_user_addresses", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributoruseraddress" });
    } else if (distributoruseraddresses) {
      res.status(200).json({ distributoruseraddresses })
    }
};

export const fetchAddresses: RequestHandler = async (req: Request, res: Response) => {
  const addresses = await distributorUserAddressServices.fetchDistributorUserAddresses("distributor");

  if (!addresses) {
    res.status(500).json({ message: "error fetching addresses" });
    return;
  }

  res.status(200).json({ addresses });
};

export const fetchUserAddresses: RequestHandler = async (req: Request, res: Response) => {
  const addresses = await distributorUserAddressServices.fetchDistributorUserAddresses("user", req.session.user_id);
  if (!addresses) {
    res.status(500).json({ message: "error fetching addresses" });
    return;
  }

  res.status(200).json({ addresses });
}

export const store: RequestHandler = async (req: IAddDistributorUserAddressReq, res: Response) => {
  const distributorUserAddress: IDistributorUserAddress = req.body;
  distributorUserAddress.distributor_user_id = req.session.user_id;

  const response = await distributorUserAddressServices.storeDistributorUserAddress(distributorUserAddress); 

  if (!response) {
    res.status(500).json({ message: "error storing address" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows, id: response.insertId });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorUserAddressReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_addresses", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributoruseraddress" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorUserAddressReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_addresses", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributoruseraddress" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};