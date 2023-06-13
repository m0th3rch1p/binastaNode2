import { IAddDistributorUserOrderReq, IGetDistributorUserOrderReq, IUpdateDistributorUserOrderReq } from "@/models/DistributorUserOrder.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUserOrder } from "@/models/DistributorUserOrder.model";
import { makeRef } from "@/helpers/StrHelper";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributoruserorders , error} = await execQuery<IDistributorUserOrder[]>("distributor_user_orders", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributoruserorders" });
    } else if (distributoruserorders) {
      res.status(200).json({ distributoruserorders })
    }
};

export const store: RequestHandler = async (req: IAddDistributorUserOrderReq, res: Response) => {
  const distributorUserOrder: IDistributorUserOrder = req.body;
  distributorUserOrder.ref = makeRef(6);
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_orders", "INSERT", ["distributor_user_id", "distributor_user_address_id", "ref"], [distributorUserOrder.distributorUserId, distributorUserOrder.distributorUserAddressId, distributorUserOrder.ref]);
  
  if (error) {
    res.status(500).json({ message: "error fetching distributoruserorders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorUserOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_orders", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributoruserorders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorUserOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_user_orders", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributoruserorders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};