import { IAddPackageCategoryReq, IGetPackageCategoryReq, IGetPackageCategorySlugReq, IUpdatePackageCategoryReq } from "@/models/PackageCategory.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IPackageCategory } from "@/models/PackageCategory.model";
import { slugify } from "@/helpers/StrHelper";

const TABLE_NAME = "package_categories";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IPackageCategory[][]>(TABLE_NAME, "SELECT", ['name', 'slug', 'created_at']);
    if (error) {
        res.status(500).json({ message: 'Error fetching pacakge categories' });
    } else if (response) {
        const [ categories ] = response;
        res.status(200).json({ categories });
    }
};

//@ts-expect-error
export const fetchBySlug: RequestHandler = async (req: IGetPackageCategorySlugReq, res: Response) => {
    const { response, error } = await execQuery<IPackageCategory[][]>(TABLE_NAME, "SELECTBYCOL", ['slug'], [ req.params ]);

    if (error) {
        res.status(500).json({ message: 'Error fetching pacakge categories' });
    } else if (response) {
        const [ categories ] = response;
        res.status(200).json({ category: categories[0] });
    }
};

export const store: RequestHandler = async (req: IAddPackageCategoryReq, res: Response) => {
    const packageCategory: IPackageCategory = req.body;
    packageCategory.slug = slugify(<string>packageCategory.name);
    
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "INSERT", ['name', 'slug'], [packageCategory.name, packageCategory.slug]);
    if (error) {
        res.status(500).json({ message: 'Error inserting package category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdatePackageCategoryReq, res: Response) => {
    const packageCategory: IPackageCategory = req.body;
    packageCategory.slug = slugify(<string>packageCategory.name);

    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [packageCategory.name, packageCategory.slug, packageCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating package category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetPackageCategoryReq, res: Response) => {
    const { response, error } = await execQuery<{affectedRows: number}>(TABLE_NAME, "DELETEBYID", null, [<number>req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting package category' });
    } else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};