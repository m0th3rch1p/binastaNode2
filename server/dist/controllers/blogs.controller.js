"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.fetchBySlug = exports.store = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const multer_1 = __importDefault(require("multer"));
const multerStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "blogPosts");
    }
});
const multerFilter = (req, file, cb) => {
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
const upload = (0, multer_1.default)({
    storage: multerStorage,
    fileFilter: multerFilter
}).single("img");
const index = async (req, res) => {
    const { response: blogs, error } = await (0, queryHelpers_1.execQuery)("blogs", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching blogs" });
    }
    else if (blogs) {
        res.status(200).json({ blogs: blogs[0] });
    }
};
exports.index = index;
const store = async (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer_1.default.MulterError) {
            res.status(422).json({
                errors: [
                    {
                        img: err.message
                    }
                ]
            });
        }
        else if (err) {
            console.log(err);
            res.status(500).json({ message: "Error uploading file" });
        }
        else {
            console.log(req.file);
            if (!req.file) {
                res.status(422).json({
                    errors: [
                        {
                            img: "Please include product images"
                        }
                    ]
                });
            }
            else {
                const blog = req.body;
                blog.slug = (0, StrHelper_1.slugify)(blog.title);
                blog.blogCategoryId = req.body.blog_category_id;
                blog.imagePath = req.file.filename;
                blog.ext = req.file.mimetype;
                const { response, error } = await (0, queryHelpers_1.execQuery)("blogs", "INSERT", [
                    "blog_category_id",
                    "title",
                    "slug",
                    "post",
                    "description",
                    "image_path",
                    "ext"
                ], [
                    blog.blogCategoryId,
                    blog.title,
                    blog.slug,
                    blog.post,
                    blog.description,
                    blog.imagePath,
                    blog.ext
                ]);
                if (error) {
                    res.status(500).json({ message: "error fetching blogs" });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
            }
        }
    });
};
exports.store = store;
const fetchBySlug = async (req, res) => {
    const { response: blogArr, error } = await (0, queryHelpers_1.execQuery)("blogs", "SELECT title, slug, post, image_path, ext, created_at FROM blogs WHERE slug=?", [], [req.params.slug]);
    if (error) {
        res.status(500).json({ message: "error fetching blog by slug" });
    }
    else if (blogArr) {
        res.status(200).json({ blog: blogArr[0] });
    }
};
exports.fetchBySlug = fetchBySlug;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("blogs", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating blogs" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("blogs", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting blogs" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
