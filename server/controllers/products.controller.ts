import { IAddProductReq, IGetProductReq, IUpdateProductReq } from "@/models/Product.model";
import { Request, Response, RequestHandler } from "express";
import multer from 'multer';
import { execQuery } from "@/helpers/queryHelpers";
import { IProduct } from "@/models/Product.model";
import { IProductImage } from "@/models/ProductImage.model";

import _ from "lodash";
import { IProductVariation } from "@/models/ProductVariation.model";

const TABLE_NAME = "products";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productImages');
    }
});

const multerFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    switch (file.mimetype.split("/")[1].toLowerCase()) {
        case "jpg":
        case "png":
        case "gif":
        case "svg":
        case "ico":
        case "svg+xml":
        case "webp":
            cb(null, true);
            break;
        default:
            cb(new Error("File is not an image"));
            break;
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
}).array('img', 2);

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IProduct[][]>(TABLE_NAME, "SELECTALL"); 
    if (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching products"
        });
    } else if (response) {
        const [ products ] = response;
        res.status(200).json({
            products
        });
    }
};

export const fetchAllUserProducts: RequestHandler = async (req: Request, res: Response) => {
    const { response: productsArr, error } = await execQuery<IProduct[][]>(TABLE_NAME, `SELECT p.id, p.name as name, p.slug as slug FROM products p `);
    
    if (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    } else if (productsArr) {
        const productIds = _.map(productsArr[0], (product) => product.id); 
        const { response: variationsArr, error } = await execQuery<IProductVariation[][]>("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await execQuery<IProductImage[][]>("producty_images", `SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds); 

        const groupedVariations = _.groupBy(variationsArr?.[0], 'product_id');
        const groupImages =  _.groupBy(imagesArr?.[0], 'product_id');
        
        const productsEmbedded = _.map(productsArr[0], (record) => {
            return {
                ...record,
                variations: groupedVariations[<number>record.id],
                images: groupImages[<number>record.id] 
            };
        });
        
        res.status(200).json({ products: productsEmbedded });
    }
};

export const fetchUserProductBySlug: RequestHandler = async (req: Request, res: Response) => {
    const { response: productsArr, error: productsErr } = await execQuery<IProduct[][]>(TABLE_NAME, `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.slug = ?`, null, [ req.params.slug ]);

    if (productsErr) {
        console.error(productsArr);
        res.status(500).json({
            message: "Error fetching products"
        });
    } else if (productsArr) {
        const productIds = _.map(productsArr[0], (product) => product.id); 

        const { response: variationsArr, error } = await execQuery<IProductVariation[][]>("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await execQuery<IProductImage[][]>("producty_images", `SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds); 
    

        const groupedVariations = _.groupBy(variationsArr?.[0], 'product_id');
        const groupImages =  _.groupBy(imagesArr?.[0], 'product_id');
        
        const productsEmbedded = _.map(productsArr?.[0], (record) => {
            return {
                ...record,
                variations: groupedVariations[<number>record.id],
                images: groupImages[<number>record.id] 
            };
        });

        
        res.status(200).json({ product: productsEmbedded });
    }
};



export const store: RequestHandler = async (req: IAddProductReq, res: Response) => {
    upload((req as Request), res, async (err) => {
        if (err instanceof multer.MulterError) {
            res.status(422).json({errors: [{
                img: err.message
            }]});
        } else if (err) {
            res.status(500).json({message: "Error uploading file"});
        } else {
            if (!req.files || !req.files.length) {
                res.status(422).json({
                    errors: [{
                        img: "Please inlcude product images"
                    }]
                });
            } else {
                const product: IProduct = req.body;
                const { response, error } = await execQuery<{affectedRows: number, insertId: number}>("products", "INSERT", ['category_id', 'name', 'slug', 'description'], [product.categoryId, product.name, product.slug, product.description]);
                if (error) {
                    res.status(500).json({message: "There was an error storing product"});
                } else {
                    const files = req.files as Express.Multer.File[];
                    files.forEach(async (file) => {
                        const productImage: IProductImage = {
                            productId: response?.insertId,
                            pathUrl: file.filename
                        };
                        await execQuery<{affectedRows: number}>("product_images", "INSERT", ['product_id', 'path_url'], [productImage.productId, productImage.pathUrl]);
                    });
                    res.status(200).json({
                        status: true
                    })
                }
            }     
        }
    });
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateProductReq, res: Response) => {
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetProductReq, res: Response) => {
    
};