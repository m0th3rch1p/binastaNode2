import { IAddProductCategoryReq, IGetProductCategoryReq, IGetSlugProductCategoryReq, IUpdateProductCategoryReq } from "@/models/ProductCategory.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IProductCategory } from "@/models/ProductCategory.model";
import { slugify } from "@/helpers/StrHelper";
import multer from 'multer';

const TABLE_NAME = "product_categories";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'productCategories');
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
}).single('img');

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IProductCategory[][]>(TABLE_NAME, "SELECT", ['id', 'name', 'slug', 'image_path', 'created_at']);
    if (error) {
        console.error("Error fetching product categories", error);
        res.status(500).json({ message: 'Error fetching product categories' });
    } else if (response) {
        const [ categories ] = response;
        res.status(200).json({ categories });
    }
};

//@ts-expect-error
export const fetchBySlug: RequestHandler = async (req: IGetSlugProductCategoryReq, res: Response) => {
    const { response, error } = await execQuery<IProductCategory[][]>(TABLE_NAME, "SELECTBYCOL", ["slug"], [ req.params ]);
    if (error) {
        console.error("Error fetching product categories", error);
        res.status(500).json({ message: 'Error fetching product categories' });
    } else if (response) {
        const [ categories ] = response;
        res.status(200).json({ category: categories[0] });
    }
};

export const store: RequestHandler = async (req: IAddProductCategoryReq, res: Response) => {
    upload((req as Request), res, async (err) => {
        if (err instanceof multer.MulterError) {
            res.status(422).json({errors: [{
                img: err.message
            }]});
        } else if (err) {
            console.log(err);
            res.status(500).json({message: "Error uploading file"});
        } else {
            console.log(req.file);
            if (!req.file) {
                res.status(422).json({
                    errors: [{
                        img: "Please include product images"
                    }]
                });
            } else {
                const productCategory: IProductCategory = req.body;
                productCategory.slug = slugify(productCategory.name as string);
                productCategory.image_path = req.file?.filename;
                productCategory.ext = req.file?.mimetype;

                const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "INSERT", ['name', 'slug', 'image_path', 'ext'], [productCategory.name, productCategory.slug, productCategory.image_path, productCategory.ext]);
                if (error) {
                    res.status(500).json({ message: 'Error inserting product category' });
                } else if (response) {
                    res.status(200).json({ status: response.affectedRows })
                }          
            }
        }
    });
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateProductCategoryReq, res: Response) => {
    const productCategory: IProductCategory = req.body;
    productCategory.slug = slugify(<string>productCategory.name);

    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [productCategory.name, productCategory.slug, productCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating product category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetProductCategoryReq, res: Response) => {
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "DELETEBYID", null, [<number>req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting product category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};