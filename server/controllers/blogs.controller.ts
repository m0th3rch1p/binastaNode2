import { IAddBlogReq, IGetBlogReq, IUpdateBlogReq } from "@/models/Blog.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IBlog } from "@/models/Blog.model";
import { slugify } from "@/helpers/StrHelper";
import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "blogPosts");
  }
});

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
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
}).single("img");

export const index: RequestHandler = async (req: Request, res: Response) => {
  const { response: blogs, error } = await execQuery<IBlog[][]>(
    "blogs",
    "SELECTALL"
  );
  if (error) {
    res.status(500).json({ message: "error fetching blogs" });
  } else if (blogs) {
    res.status(200).json({ blogs: blogs[0] });
  }
};

export const store: RequestHandler = async (
  req: IAddBlogReq,
  res: Response
) => {
  upload(req as Request, res, async (err) => {
    if (err instanceof multer.MulterError) {
      res.status(422).json({
        errors: [
          {
            img: err.message
          }
        ]
      });
    } else if (err) {
      console.log(err);
      res.status(500).json({ message: "Error uploading file" });
    } else {
      console.log(req.file);
      if (!req.file) {
        res.status(422).json({
          errors: [
            {
              img: "Please include product images"
            }
          ]
        });
      } else {
        const blog: IBlog = req.body;
        blog.slug = slugify(blog.title as string);
        blog.blogCategoryId = req.body.blog_category_id;
        blog.imagePath = req.file.filename;
        blog.ext = req.file.mimetype;
        const { response, error } = await execQuery<{ affectedRows: number }>(
          "blogs",
          "INSERT",
          [
            "blog_category_id",
            "title",
            "slug",
            "post",
            "description",
            "image_path",
            "ext"
          ],
          [
            blog.blogCategoryId,
            blog.title,
            blog.slug,
            blog.post,
            blog.description,
            blog.imagePath,
            blog.ext
          ]
        );
  
        if (error) {
          res.status(500).json({ message: "error fetching blogs" });
        } else if (response) {
          res.status(200).json({ status: response.affectedRows });
        }
      }
    }
  });
};

export const fetchBySlug: RequestHandler = async (req: Request, res: Response) => {
  const { response: blogArr, error } = await execQuery<IBlog[][]>("blogs", "SELECT title, slug, post, image_path, ext, created_at FROM blogs WHERE slug=?", [], [req.params.slug])
  if (error) {
    res.status(500).json({ message: "error fetching blog by slug" });
  } else if (blogArr) {
    res.status(200).json({ blog: blogArr[0] });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (
  req: IUpdateBlogReq,
  res: Response
) => {
  const { response, error } = await execQuery<{ affectedRows: number }>(
    "blogs",
    "UPDATEBYID",
    [],
    []
  );

  if (error) {
    res.status(500).json({ message: "error updating blogs" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (
  req: IGetBlogReq,
  res: Response
) => {
  const { response, error } = await execQuery<{ affectedRows: number }>(
    "blogs",
    "DELETEBYID",
    ["id"],
    [req.params.id]
  );

  if (error) {
    res.status(500).json({ message: "error deleting blogs" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};
