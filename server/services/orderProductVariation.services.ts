import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IOrderProductVariation } from "@/models/OrderProductVariation.model";

const TABLE_NAME = "order_product_variations";

export const fetchOrderProductVariationByOrderId = async (orderId: number) => {
    const query = `SELECT pv.variation, pv.buy_price, opv.quantity, p.name as product_name, pi.path_url as product_image ${TABLE_NAME}
INNER JOIN (products p, product_variations pv, product_images pi) ON (pv.id = opv.product_variation_id AND pv.product_id = p.id AND pi.product_id = p.id)
WHERE opv.order_id = ?`;
    const { response, error } = await execQuery<[IOrderProductVariation[]][]>(TABLE_NAME, query, null, [ orderId ]);
    return execResponse<IOrderProductVariation[]>(response, error);
};

