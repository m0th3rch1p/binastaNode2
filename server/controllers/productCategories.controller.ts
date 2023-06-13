import { IAddProductCategoryReq, IGetProductCategoryReq, IGetSlugProductCategoryReq, IUpdateProductCategoryReq } from "@/models/ProductCategory.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IProductCategory } from "@/models/ProductCategory.model";
import { slugify } from "@/helpers/StrHelper";

const TABLE_NAME = "product_categories";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IProductCategory[][]>(TABLE_NAME, "SELECT", ['name', 'slug', 'created_at']);
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
    const productCategory: IProductCategory = req.body;
    productCategory.slug = slugify(<string>productCategory.name);
    
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "INSERT", ['name', 'slug'], [productCategory.name, productCategory.slug]);
    if (error) {
        res.status(500).json({ message: 'Error inserting product category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows })
    }
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