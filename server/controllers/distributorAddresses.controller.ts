import { IAddDistributorAddressReq, IGetDistributorAddressReq, IUpdateDistributorAddressReq } from "@/models/DistributorAddress.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorAddress } from "@/models/DistributorAddress.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributor_addresses , error} = await execQuery<IDistributorAddress[]>("distributor_addresses", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributoraddress" });
    } else if (distributor_addresses) {
      res.status(200).json({ distributor_addresses })
    }
};

export const store: RequestHandler = async (req: IAddDistributorAddressReq, res: Response) => {
  const distributorAddress: IDistributorAddress = req.body;
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_addresses", "INSERT", ["distributor_id", "address", "phoneNumber"], [distributorAddress.distributorId, distributorAddress.address, distributorAddress.phoneNumber]);
  
  if (error) {
    res.status(500).json({ message: "error fetching distributor addresses" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
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