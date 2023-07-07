import { IAddDistributorOrderReq, IGetDistributorOrderReq, IUpdateDistributorOrderReq } from "@/models/DistributorOrder.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorOrder } from "@/models/DistributorOrder.model";
import { makeRef } from "@/helpers/StrHelper";
import * as distributorOrderServices from "@/services/distributorOrders.services";
import { fetchProductVariationsbyIdArray } from "@/services/productVariations.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const orders = await distributorOrderServices.fetchOrders("admin");
    if (!orders) {
      res.status(500).json({ message: 'Error fetching distributor orders' });
    } else {
      res.status(200).json({ orders });
    }
};

export const fetchDistributorOrders: RequestHandler = async (req: Request, res: Response) => {
  const orders = await distributorOrderServices.fetchOrders(req.session.role === "admin" ? "admin" : "distributor", req.session.role === "admin" ? parseInt(req.params.id as string) : req.session.user_id);
  if (!orders) {
    res.status(500).json({ message: 'Error fetching distributor orders' });
  } else {
    res.status(200).json({ orders });
  }
}

export const fetchDistributorOrderByRef: RequestHandler = async (req: Request, res: Response) => {
  const order = await distributorOrderServices.fetchOrderByRef("distributor", req.params.ref, req.session.user_id);
  if (!order) {
    res.status(500).json({ message: 'Error fetching order' });
  } else if (!order.length) {
    res.status(404).json({ message: 'Could not find order'});
  } else {
    res.status(200).json({ order: order[0] });
  }
};

export const fetchDistributorOrderById: RequestHandler = async (req: Request, res: Response) => {
  const order = await distributorOrderServices.fetchOrderById("distributor", parseInt(req.params.id), req.session.user_id);
  if (!order) {
    res.status(500).json({ message: 'Error fetching order' });
    return;
  } else if (!order.length) {
    res.status(404).json({ message: 'Could not find order'});
    return;
  }
  const productVariationIdsArr = await distributorOrderServices.fetchOrderProductVariationsById(order[0].id as number);
  console.log(productVariationIdsArr);
  if (!productVariationIdsArr) {
    res.status(500).json({ message: 'Error fetching order' });
    return;
  }

  const productVariationIds = productVariationIdsArr.map((productVariation) => productVariation.product_variation_id );

  const productVariations = await fetchProductVariationsbyIdArray("distributor", productVariationIds as number[]);
  order[0].variations = productVariations;

  res.status(200).json({ order: order[0] });
};

export const store: RequestHandler = async (req: IAddDistributorOrderReq, res: Response) => {
  const distributorOrder: IDistributorOrder = req.body;
  distributorOrder.ref = makeRef(6);
  distributorOrder.distributor_id = req.session.user_id;

  const results = await distributorOrderServices.store(distributorOrder, req.body.product_variations, req.session.user_id as number);  
  if (!results) {
    res.status(500).json({ message: "Error storing orders" });
  } else {
    res.status(200).json({ status: results.affectedRows, id: results.insertId });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_orders", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributororders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_orders", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributororders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};