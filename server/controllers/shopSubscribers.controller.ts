import { IAddShopSubscriberReq, IGetShopSubscriberReq, IUpdateShopSubscriberReq } from "@/models/ShopSubscriber.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IShopSubscriber } from "@/models/ShopSubscriber.model";
import * as shopSubscriberServices from "@/services/shopSubscribers.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const subscribers = await shopSubscriberServices.fetchSubscribers();
    if (!subscribers) {
      res.status(500).json({ message: "error fetching shopsubscribers" });
      return;
    } 

    res.status(200).json({ subscribers });
};

export const store: RequestHandler = async (req: IAddShopSubscriberReq, res: Response) => {
  const response = await shopSubscriberServices.storeSubscriber(req.body);
  
  if (!response) {
    res.status(500).json({ message: "error fetching shopsubscribers" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateShopSubscriberReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("shop_subscribers", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating shopsubscribers" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetShopSubscriberReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("shop_subscribers", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting shopsubscribers" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};