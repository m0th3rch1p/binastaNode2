import { IAddDistributorUserAddressReq, IGetDistributorUserAddressReq, IUpdateDistributorUserAddressReq } from "@/models/DistributorUserAddress.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUserAddress } from "@/models/DistributorUserAddress.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributoruseraddresses , error} = await execQuery<IDistributorUserAddress[]>("distributor_user_addresses", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributoruseraddress" });
    } else if (distributoruseraddresses) {
      res.status(200).json({ distributoruseraddresses })
    }
};

export const store: RequestHandler = async (req: IAddDistributorUserAddressReq, res: Response) => {
  const distributorUserAddress: IDistributorUserAddress = req.body;

  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_addresses", "INSERT", ["distributor_user_id", "address", "phone_number"], [distributorUserAddress.distributor_user_id, distributorUserAddress.address, distributorUserAddress.phoneNumber]);
  
  if (error) {
    res.status(500).json({ message: "error fetching distributoruseraddress" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
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