import { IAddBlogReq, IGetBlogReq, IUpdateBlogReq } from "@/models/Blog.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IBlog } from "@/models/Blog.model";
import { slugify } from "@/helpers/StrHelper";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: blogs , error} = await execQuery<IBlog[]>("blogs", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching blogs" });
    } else if (blogs) {
      res.status(200).json({ blogs })
    }
};

export const store: RequestHandler = async (req: IAddBlogReq, res: Response) => {
  const blog: IBlog = req.body;
  blog.slug = slugify(<string>blog.title);
  
  const { response, error } = await execQuery<{ affectedRows: number }>("blogs", "INSERT", [], []);
  
  if (error) {
    res.status(500).json({ message: "error fetching blogs" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateBlogReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("blogs", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating blogs" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetBlogReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("blogs", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting blogs" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};