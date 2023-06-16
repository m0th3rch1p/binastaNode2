import { IAddOrderReq, IGetOrderReq, IOrder, IUpdateOrderReq } from "@/models/Order.model";
import { Request, Response, RequestHandler } from "express";

import { execQuery } from "@/helpers/queryHelpers";
import { makeRef } from "@/helpers/StrHelper";
import { IOrderProductVariation } from "@/models/OrderProductVariation.model";

const TABLE_NAME = "orders";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IOrder[][]>(TABLE_NAME, "SELECTALL");
    if (error) {
        res.status(500).json({ message: "Error fetching orders" });
    } else if (response) {
        const [ orders ] = response;
        res.status(200).json({ orders });
    }
};

export const fetchUserOrders: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IOrder[][]>(TABLE_NAME, "SELECTBYCOL", ['ref', 'status', 'amount', 'created_at'], [req.session.user_id]);
    if (error) {
        res.status(500).json({ message: "Error fetching orders" });
    } else if (response) {
        const [ orders ] = response;
        res.status(200).json({ orders });
    }
};

export const fetchUserUserOrderById: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IOrder[][]>(TABLE_NAME, "SELECT ref, status, amount, created_at FROM orders WHERE id =? AND user_id = ?", null, [ req.params.id, req.session.user_id ])
    
    if (error) {
        res.status(500).json({ message: "Error fetching order by id" });
    } else if (response) {
        const [ orders ] = response;
        res.status(200).json({ order: orders[0] });
    }
};

export const store: RequestHandler = async (req: IAddOrderReq, res: Response) => {
    const order: IOrder = req.body;
    order.ref = makeRef(8);
    order.userId = req.session.user_id;
    order.userAddressId = req.body.user_address_id;
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>(TABLE_NAME, "INSERT", [
        "user_id",
        "user_address_id",
        "ref",
    ], [
        order.userId,
        order.userAddressId,
        order.ref
    ]);

    if (error) {
        console.log(error);
        res.status(500).json({ message: "Error storing order" });
    } else if (response) {
        const productVariations = req.body.productVariations;
        const orderProductVariations: any[] = [];
        productVariations.forEach((variation: [number, number]) => {
            orderProductVariations.push([ response.insertId, variation[0], variation[1] ]);
        });
    
        const { response:variationResponse, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "BATCHINSERT", [
            "order_id",
            "product_variation_id",
            "quantity"   
        ], orderProductVariations);
        console.log(error);
        res.status(200).json({ status: variationResponse?.affectedRows, id: variationResponse?.insertId });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateOrderReq, res: Response) => {
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetOrderReq, res: Response) => {
    
};