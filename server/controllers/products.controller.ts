import { IAddProductReq, IGetProductReq, IUpdateProductReq } from "@/models/Product.model";
import { Request, Response, RequestHandler } from "express";
import multer from 'multer';
import { execQuery } from "@/helpers/queryHelpers";
import { IProduct } from "@/models/Product.model";
import { IProductImage } from "@/models/ProductImage.model";

import _ from "lodash";
import { slugify } from "@/helpers/StrHelper";

import * as productServices from "@/services/products.services";
import { Client, fetchProductVariationByProductsArray, fetchProductVariationsByProductId } from "@/services/productVariations.services";
import { fetchProductImagesByProductId, fetchProductImagesByProductIdArray } from "@/services/productImages.services";
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
    let products = await productServices.fetchProducts("admin", { perPage: parseInt(req.query.per_page as string), offset: parseInt(req.query.offset as string)});
    if (!products) {
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    } 

    res.status(200).json({
        products
    });
};

export const fetchProductById = async (req: Request, res: Response) => {
    const product = await productServices.fetchRelatedProductsByProductId(parseInt(req.params.id as string, 10));
    if (!product) {
        res.status(500).json({ message: "Error fetching product by id" });
        return;
    } else if (!product.length) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const extras = await fetchSingleProductExtras(product[0].id as number, "admin");

    product[0].variations = extras?.productVariations;
    product[0].images = extras?.productImages as IProductImage[];
    product[0].related = extras?.productVariations;

    res.status(200).json({ product: product[0] });
};

export const fetchProductBySlug = async (req: Request, res: Response) => {
    const product = await productServices.fetchProductsBySlug(req.params.slug as string);
    if (!product) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    } else if (!product.length) {
        res.status(404).json({ message: "Product not found" });
        return;
    }

    const extras = await fetchSingleProductExtras(product[0].id as number, "admin");
    product[0].variations = extras?.productVariations;
    product[0].images = extras?.productImages as IProductImage[];
    product[0].related = extras?.relatedProducts;

    res.status(200).json({ product: product[0] });
};

export const fetchAllUserProducts: RequestHandler = async (req: Request, res: Response) => {
    let products = await productServices.fetchProducts("user", { perPage: parseInt(req.query.per_page as string), offset: parseInt(req.query.offset as string)});
    if (!products) {
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    } else if (!(products).length) {
        res.status(200).json({ products });
        return;
    } 

    const productIds = (products).map((product: IProduct) => product.id) 

    const extras = await fetchSingleProductExtras(productIds as number[], "user");
    if (!extras) {
        res.status(500).json({ message: 'Error fetching products' });
        return;
    }

    const productsEmbedded = products.map(product => ({
        ...product,
        variations: (extras.productVariations as _.Dictionary<IProductVariation[]>)?.[product.id as number],
        images: (extras.productImages as _.Dictionary<IProductImage[]>)?.[product.id as number]
    }))

    res.status(200).json({ products: productsEmbedded });
};

export const fetchUserProductBySlug: RequestHandler = async (req: Request, res: Response) => {
    const product = await productServices.fetchProductsBySlug(req.params.slug);

    if (!product) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    } else if (!product[0] || !product.length) {
        res.status(404).json({ message: "Product not found" });
        return;
    }

    const extras = await fetchSingleProductExtras(product[0].id as number, "user");
    if (!extras) {
        res.status(500).json({ message: "Error fetching products"});
        return;
    }

    product[0].variations = extras.productVariations
    product[0].images = extras.productImages ?? [];
    product[0].related = extras.relatedProducts;
    res.status(200).json({ product });
};

export const fetchDistributorProducts: RequestHandler = async (req: Request, res: Response) => {
    let products = await productServices.fetchProducts("user", { perPage: parseInt(req.query.per_page as string), offset: parseInt(req.query.offset as string)});
    if (!products) {
        res.status(500).json({
            message: "Error fetching products"
        });
        return;
    } else if (!products.length) {
        res.status(200).json({ products });
        return;
    } 

    const productIds = (products).map((product: IProduct) => product.id) 

    const client: Client = "distributor";
    const extras = await fetchSingleProductExtras(productIds as number[], client);
    console.log(extras);
    if (!extras) {
        res.status(500).json({ message: 'Error fetching products' });
        return;
    }

    const productsEmbedded = products.map(product => ({
        ...product,
        variations: (extras.productVariations as _.Dictionary<IProductVariation[]>)[product.id as number],
        images: (extras.productImages as _.Dictionary<IProductImage[]>)[product.id as number]
    }))

    res.status(200).json({ products: productsEmbedded });
}

export const fetchDistributorProductBySlug: RequestHandler = async (req: Request, res: Response) => {
    const product = await productServices.fetchProductsBySlug(req.params.slug);
    console.log(product);
    if (!product) {
        res.status(500).json({ message: "Error fetching products" });
        return;
    } else if (!product[0] || !product.length) {
        res.status(404).json({ message: "Product not found" });
        return;
    }

    const extras = await fetchSingleProductExtras(product[0].id as number, "distributor");
    if (!extras) {
        res.status(500).json({ message: "Error fetching products"});
        return;
    }

    product[0].variations = extras.productVariations
    product[0].images = extras.productImages ?? [];
    product[0].related = extras.relatedProducts;
    res.status(200).json({ product });
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

const fetchSingleProductExtras = async (productId: number | number[], client: Client) => {
    let productVariations;
    let productImages;
    let relatedProducts: IProduct["related"] = [];

    if (!Array.isArray(productId)) {
        productVariations = productVariations = await fetchProductVariationsByProductId({productId: productId as number, client});
        if (!productVariations) return null;

        productImages = await fetchProductImagesByProductId(productId as number);
    
        const related = await productServices.fetchRelatedProductsByProductId(productId as number);
        if (related && related.length) {
            const relatedIds = related?.map(product => product.id);

            const relatedProductVariations = fetchProductVariationByProductsArray({productIds: relatedIds as number[], client: "user"});
            const groupedRelatedVariations = _.groupBy(relatedProductVariations, "product_id")

            const relatedImages = await fetchProductImagesByProductIdArray(relatedIds as number[]);
            const groupedRelatedImages = _.groupBy(relatedImages, "product_id");

            //@ts-expect-error
            relatedProducts = related.map(product => ({
                ...product,
                images: groupedRelatedImages[product.id as number],
                variations: groupedRelatedVariations[product.id as number]
            }))
        }
    } else {
        const rawVariations = await fetchProductVariationByProductsArray({productIds: productId, client});
        if (!rawVariations) return null;
        productVariations = _.groupBy(rawVariations, "product_id");
        
        const rawImages = await fetchProductImagesByProductIdArray(productId);
        productImages = _.groupBy(rawImages, "product_id");
    }
    return { relatedProducts, productVariations, productImages };
};