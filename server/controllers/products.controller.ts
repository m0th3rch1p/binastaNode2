import { IAddProductReq, IGetProductReq, IUpdateProductReq } from "@/models/Product.model";
import { Request, Response, RequestHandler } from "express";
import multer from 'multer';
import { execQuery } from "@/helpers/queryHelpers";
import { IProduct } from "@/models/Product.model";
import { IProductImage } from "@/models/ProductImage.model";

import _ from "lodash";
import { IProductVariation } from "@/models/ProductVariation.model";
import { slugify } from "@/helpers/StrHelper";

import * as productServices from "@/services/products.services";

const TABLE_NAME = "products";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productImages');
    }
});

const multerFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    switch (file.mimetype.split("/")[1].toLowerCase()) {
        case "jpg":
        case "jpeg":
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
}).array('img[]', 2);

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
    let products = await productServices.fetchProducts({ perPage: parseInt(req.query.per_page as string), offset: parseInt(req.query.offset as string),  });
    if (!products) {
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    }
    if (!(products[0] as IProduct[]).length) {
        res.status(200).json({ products: products[0] });
    } else {
        const productIds = products[0].map((product) => product.id) 
        const { response: variationsArr, error } = await execQuery<IProductVariation[][]>("product_variations", `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds);
        const { response: imagesArr, error: imagesError } = await execQuery<IProductImage[][]>("producty_images", `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`, null, productIds); 

        const groupedVariations = _.groupBy(variationsArr?.[0], 'product_id');
        const groupImages =  _.groupBy(imagesArr?.[0], 'product_id');
        
        const productsEmbedded = _.map(products[0], (record) => {
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
    const productArr = await productServices.fetchProductsBySlug(req.params.slug);

    if (!productArr) {
        res.status(500).json({
            message: "Error fetching products"
        });
    } else if (!productArr[0]) {   
        res.status(404).json({ message: "Product not found"});
        return;
    }

    const { response: variationsArr, error } = await execQuery<IProductVariation[][]>("product_variations", 
        `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id = ?`, 
        null, [ productArr?.[0].id ]);
        
        const { response: imagesArr, error: imagesError } = await execQuery<IProductImage[][]>("producty_images", 
        `SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id = ?`, 
        null, [ productArr?.[0].id ]); 
        
        const { response: relatedArr } = await execQuery<IProduct[][]>("products", 
        `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8`,
        null, [productArr?.[0].category_id]);

        if (relatedArr) {
            const relatedProductsId = _.map(relatedArr[0], (related) => related.id);
            const { response: relatedVariationsArr } = await execQuery<IProductVariation[][]>("product_variations", 
            `SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(relatedProductsId.length).slice(1)})`, 
            null, relatedProductsId);


            const groupedRelatedVariations = _.groupBy(relatedVariationsArr?.[0], 'product_id');
            const groupedVariations = _.groupBy(variationsArr?.[0], 'product_id');
            const groupedImages =  _.groupBy(imagesArr?.[0], 'product_id');
            
            const relatedEmbedded = _.map(relatedArr?.[0], (record) => {
                return {
                    ...record,
                    variations: groupedRelatedVariations[<number>record.id]
                }
            });

            (productArr?.[0] as IProduct).variations = groupedVariations;
            (productArr?.[0] as IProduct).images = groupedImages;
            
            res.status(200).json({ product: productArr?.[0], related: relatedEmbedded });
        }
};

export const fetchUserProductsByCategorySlug: RequestHandler = async (req: Request, res: Response) => {
    const { response: productsResponse, error: productsError } = await execQuery<IProduct[][]>(TABLE_NAME, 
        `SELECT pc.name as category_name, pc.slug as category_slug, p.id p.name, p.slug FROM products p 
         INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?`, null, [req.params.slug]);
        
    if (!productsError) {
        res.status(500).json({message: "Error fetching products"});
        return;
    }   
    
    const productIds =  (productsResponse as IProduct[][])[0].map((product) => product.id);
    
    const { response: productVariationsResponse, error:  productVariationsError} = await execQuery<IProductVariation[][]>(TABLE_NAME, `
        SELECT pv.variation, pv.buyPrice FROM product_variations pv WHERE product_id IN (?)
    `, null, productIds);


    if (productVariationsError) {
        res.status(500).json({message: "Error fetching products"});
        return;
    }
    
    const { response: productImagesResponse, error: productImagesError } = await execQuery<IProductImage>(TABLE_NAME, `SELECT path_url FROM product_images WHERE product_id IN (?)`, null, productIds);
    if (productImagesError) {
        res.status(500).json({message: "Error fetching products"});
        return;
    }

    const groupedProductVariations = _.groupBy((productVariationsResponse as IProductVariation[][])[0] , 'product_id');
    const groupProductImages = _.groupBy((productImagesResponse as IProductImage[][])[0], 'product_id');
    
    const products = (productsResponse as IProduct[][])[0].map(product => ({
        ...product,
        images: groupProductImages[product.id as number],
        variations: groupedProductVariations[product.id as number]
    })); 

    res.status(200).json({ products })
};

export const searchUserProducts: RequestHandler = async (req:Request, res:Response) => {
    const { response, error } = await execQuery<IProduct[][]>(TABLE_NAME, "SELECT pc.name as category_name, pc.slug as category_slug, p.name, p.slug FROM products p INNER JOIN product_categories pc ON p.category_id = pc.id WHERE p.name LIKE ? LIMIT 10", null, [`%${req.params.query}%`]);
    if (error) {
        res.status(500).json({
            message: "Error searching for products"
        });
    } else if (response) {
        res.status(200).json({
            products: response[0]
        });
    }
}

export const fetchDistributorProducts: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IProduct[][]>(TABLE_NAME, "SELECT pc.category_name, pc.slug, p.id, p.name, p.slug, p.description FROM products p INNER JOIN product_categories pc ON pc.id = p.category_id ORDERBY DESC");
    if (error) {
        res.status(500).json({
            message: 'Error fetching distributor products'
        });
    } else if (response && response[0]) {
        const productIds = response[0].map(product => product.id);
        const { response: productVariationsResponse, error: productVariationsError } = await execQuery<IProductVariation[][]>(TABLE_NAME, "SELECT pv.variation, pv.wholesale_price, pv.recommended_price, pv.wholesale_min WHERE product_variations pv WHERE pv.product_id IN (?)", null, productIds);
        if (productVariationsError || !productVariationsResponse) {
            res.status(500).json({message: "Error fetching product variations"});
            return;
        }
    
        const { response: productImagesResponse, error: productImagesError } = await execQuery<IProductImage[][]>(TABLE_NAME, "SELECT path_url FROM product_images pi WHERE pi.product_id IN (?)", null, productIds);
        if (productImagesError || !productImagesResponse ) {
            res.status(500).json({ message: "Error fetching product images" });
            return;
        }
    
        const groupedVariations = _.groupBy(productVariationsResponse[0], 'product_id');
        const groupedImages = _.groupBy(productImagesResponse[0], 'product_id');

        const products = response[0].map((product => ({
            ...product,
            variations: groupedVariations[product.id as number],
            images: groupedImages[product.id as number]
        })));

        res.status(200).json({ products });
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
                product.slug = slugify(product.name as string);
                product.categoryId = req.body.category_id;
                const { response, error } = await execQuery<[{affectedRows: number, insertId: number}]>("products", "INSERT", ['category_id', 'name', 'slug', 'description'], [product.categoryId, product.name, product.slug, product.description]);
                if (error) {
                    res.status(500).json({message: "There was an error storing product"});
                } else {
                    const files = req.files as Express.Multer.File[];
                    files.forEach(async (file) => {
                        const productImage: IProductImage = {
                            productId: response?.[0].insertId,
                            pathUrl: file.filename,
                            ext: file.mimetype
                        };
                        await execQuery<{affectedRows: number}>("product_images", "INSERT", ['product_id', 'path_url', 'ext'], [productImage.productId, productImage.pathUrl, productImage.ext]);
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