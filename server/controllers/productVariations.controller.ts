import { IAddProductVariationReq, IGetProductVariationReq, IProductVariation, IUpdateProductVariationReq } from "@/models/ProductVariation.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";

const TABLE_NAME = "product_variations";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IProductVariation[][]>(TABLE_NAME, "SELECTALL");
    if (error) {
        res.status(500).json({ message: 'Error fetching product variants' });
    } else if (response) {
        const [ variations ] = response;
        res.status(200).json({
            variations
        });
    }
};
export const store: RequestHandler = async (req: IAddProductVariationReq, res: Response) => {
    const productVariation: IProductVariation = req.body;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "INSERT", [
        'product_id', 
        'variation', 
        'buy_price', 
        'sale_price', 
        'wholesale_price', 
        'recommended_price', 
        'wholesale_min', 
        'stock',
        'sold'
    ], [
        productVariation.product_id,
        productVariation.variation,
        productVariation.buy_price,
        productVariation.sale_rice,
        productVariation.wholesale_price,
        productVariation.recommended_price,
        productVariation.wholesale_min,
        productVariation.stock,
        productVariation.sold
    ]);  
    
    if (error) {
        res.status(500).json({ message: 'Error storing product variations' });
    } else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateProductVariationReq, res: Response) => {
    const productVariation: IProductVariation = {...req.params, ...req.body};
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "UPDATEBYID", [
        'product_id', 
        'variation', 
        'buy_price', 
        'sale_price', 
        'wholesale_price', 
        'recommended_price', 
        'wholesale_min', 
        'stock',
        'sold'
    ], [
        productVariation.product_id,
        productVariation.variation,
        productVariation.buy_price,
        productVariation.sale_rice,
        productVariation.wholesale_price,
        productVariation.recommended_price,
        productVariation.wholesale_min,
        productVariation.stock,
        productVariation.sold,
        productVariation.id
    ]);  
    
    if (error) {
        res.status(500).json({ message: 'Error updating product variations' });
    } else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetProductVariationReq, res: Response) => {
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "DELETEBYID", null, [ req.params.id ]);

    if (error) {
        res.status(500).json({ message: 'Error deleting product variations' });
    } else if (response) {
        res.status(200).json({
            status: response.affectedRows
        });
    }
};