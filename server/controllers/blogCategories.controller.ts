import { IAddBlogCategoryReq, IGetBlogCategoryReq, IUpdateBlogCategoryReq } from "@/models/BlogCategory.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IBlogCategory } from "@/models/BlogCategory.model";
import { slugify } from "@/helpers/StrHelper";

const TABLE_NAME = "blog_categories";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IBlogCategory[][]>(TABLE_NAME, "SELECT", ['id', 'name', 'slug', 'created_at']);
    if (error) {
        res.status(500).json({ message: 'Error fetching blog categories' });
    } else if (response) {
        const [ categories ] = response;
        res.status(200).json({ categories });
    }  
};

export const store: RequestHandler = async (req: IAddBlogCategoryReq, res: Response) => {
    const blogCategory: IBlogCategory = req.body;
    blogCategory.slug = slugify(<string>blogCategory.name);
    
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "INSERT", ['name', 'slug'], [blogCategory.name, blogCategory.slug]);
    if (error) {
        res.status(500).json({ message: 'Error inserting blog category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateBlogCategoryReq, res: Response) => {
    const blogCategory: IBlogCategory = req.body;
    blogCategory.slug = slugify(<string>blogCategory.name);

    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [blogCategory.name, blogCategory.slug, blogCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating blog category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetBlogCategoryReq, res: Response) => {
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "DELETEBYID", null, [<number>req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting blog category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};