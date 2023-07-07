import { IAddDistributorUserOrderReq, IGetDistributorUserOrderReq, IUpdateDistributorUserOrderReq } from "@/models/DistributorUserOrder.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorUserOrder } from "@/models/DistributorUserOrder.model";
import { makeRef } from "@/helpers/StrHelper";

import * as distributorUserOrderServices from "@/services/distributorUserOrders.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributoruserorders , error} = await execQuery<IDistributorUserOrder[]>("distributor_user_orders", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributoruserorders" });
    } else if (distributoruserorders) {
      res.status(200).json({ distributoruserorders })
    }
};

export const fetchUserOrders: RequestHandler = async (req: Request, res: Response) => {
  const orders = await distributorUserOrderServices.fetchDistributorUserOrders("user", req.session.user_id);
  if (!orders) {
    res.status(500).json({ message: 'Error fetching orders' });
    return;
  }

  res.status(200).json({ orders });
};

export const fetchUserOrderById: RequestHandler = async (req: Request, res: Response) => {
    const orderResponse = await distributorUserOrderServices.fetchDistributorUserOrderById("user", parseInt(req.params.id), req.session.user_id);
    if (!orderResponse) {
      res.status(500).json({ message: 'Error fetching user orders' });
      return;
    }

    return res.status(200).json({...orderResponse});
}

export const fetchDistributorUserOrders: RequestHandler = async (req: Request, res: Response) => {
  const orders = await distributorUserOrderServices.fetchDistributorUserOrders("distributor", req.session.user_id);
  if (!orders) {
    res.status(500).json({ message: 'Error fetching orders' });
    return;
  }

  res.status(200).json({ orders });
};

export const fetchDistributorUserOrdersBySlug: RequestHandler = async (req: Request, res: Response) => {
  const order = await distributorUserOrderServices.fetchDistributorUserOrderByRef("distributor", req.session.user_id, req.params.ref);
  if (!order) {
    res.status(500).json({ message: 'Error fetching orders' });
    return;
  } else if (!order.order) {
    res.status(404).json({ message: 'order not found' });
    return;
  }

  res.status(200).json({ ...order });
}

export const store: RequestHandler = async (req: IAddDistributorUserOrderReq, res: Response) => {
  const distributorUserOrder: IDistributorUserOrder = req.body;
  distributorUserOrder.ref = makeRef(6);
  distributorUserOrder.distributor_user_id = req.session.user_id;
  distributorUserOrder.distributor_user_address_id = req.body.user_address_id;

  const response = await distributorUserOrderServices.storeDistributorUserOrder(distributorUserOrder, req.body.product_variations);
  if (!response) {
    res.status(500).json({ message: "error fetching distributoruserorders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows, id: response.insertId });
  }
};

export const markDelivered: RequestHandler = async (req: Request, res: Response) => {
  const status = await distributorUserOrderServices.markDistriutorUserOrderDelivered(req.body.order_id, req.session.user_id as number);
  if (!status) {
    res.status(500).json({ message: "error fetching marking ordered as delivered" });
    return;
  }

  res.status(200).json({ status: status.affectedRows });
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