import _ from 'lodash';
import { IAddOrderReq, IGetOrderReq, IOrder, IUpdateOrderReq } from "@/models/Order.model";
import { Request, Response, RequestHandler } from "express";

import { execQuery } from "@/helpers/queryHelpers";
import { makeRef } from "@/helpers/StrHelper";
import { IOrderProductVariation } from "@/models/OrderProductVariation.model";
import { IProductVariation } from "@/models/ProductVariation.model";

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
    const { response, error } = await execQuery<IOrder[][]>(TABLE_NAME, "SELECT ref, status, amount, created_at FROM orders WHERE user_id = ?", null, [req.session.user_id]);
    if (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching orders" });
    } else if (response) {
        const [ orders ] = response;
        res.status(200).json({ orders });
    }
};

export const fetchUserUserOrderById: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IOrder[][]>(TABLE_NAME, "SELECT ref, status, amount, created_at FROM orders WHERE id =? AND user_id = ?", null, [ parseInt(req.params.id), req.session.user_id ]);
    
    if (error) {
        res.status(500).json({ message: "Error fetching order by id" });
    } else if (response) {
        const [ orders ] = response;

        if (orders.length) {
            const { response: orderProductVariationResponse } = await execQuery<IOrderProductVariation[][]>("order_product_variations", "SELECT product_variation_id, quantity FROM order_product_variations WHERE order_id = ?", null, [req.params.id]);
            const groupedVariations = _.groupBy(orderProductVariationResponse?.[0], 'product_variation_id');
            const opvIds = orderProductVariationResponse?.[0].map(opv => opv.product_variation_id);

            const { response: productVariationsResponse } = await execQuery<IProductVariation[][]>("product_variations", 
            "SELECT pv.id, pv.variation, pv.buy_price, p.name as product_name FROM product_variations pv INNER JOIN products p ON p.id = pv.product_id WHERE pv.id IN (?)", null, opvIds);
            const productVariationsEmbedded = _.map(productVariationsResponse?.[0], (pv) => {
            return { 
                ...pv,
                quantity: groupedVariations?.[pv.id as number]
            }
            })
                
            res.status(200).json({ order: orders[0], product_variations: productVariationsEmbedded });
        } else res.status(404).json({message: 'Order Not Found'});
    }
};

export const store: RequestHandler = async (req: IAddOrderReq, res: Response) => {
    const order: IOrder = req.body;
    order.ref = makeRef(8);
    order.userId = req.session.user_id;
    order.userAddressId = req.body.user_address_id;
    const { response, error } = await execQuery<[{ affectedRows: number, insertId: number }]>(TABLE_NAME, "INSERT", [
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
        const productVariations = req.body.product_variations;
        const orderProductVariations: any[] = [];
        productVariations.forEach((variation: [number, number]) => {
            orderProductVariations.push([ response[0].insertId, variation[0], variation[1] ]);
        });
    
        const { response:variationResponse, error } = await execQuery<[{affectedRows: number, insertId: number}]>("order_product_variations", "BATCHINSERT", [
            "order_id",
            "product_variation_id",
            "quantity"   
        ], [orderProductVariations]);

        res.status(200).json({ status: variationResponse?.[0].affectedRows, id: response?.[0].insertId });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateOrderReq, res: Response) => {
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetOrderReq, res: Response) => {
    
};