"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.fetchBySlug = exports.store = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const multer_1 = __importDefault(require("multer"));
const blogServices = __importStar(require("../services/blogs.services"));
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
    const blogs = await blogServices.fetchBlogs("admin");
    if (!blogs) {
        res.status(500).json({ message: "error fetching blogs" });
    }
    else if (blogs) {
        res.status(200).json({ blogs });
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
        else if (!req.file) {
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
            blog.image_path = req.file.filename;
            blog.ext = req.file.mimetype;
            const response = await blogServices.storeBlog(blog);
            if (!response) {
                res.status(500).json({ message: "error fetching blogs" });
            }
            else if (response) {
                res.status(200).json({ status: response.affectedRows });
            }
        }
    });
};
exports.store = store;
const fetchBySlug = async (req, res) => {
    console.log(req.params.slug);
    const blogArr = await blogServices.fetchBlogByRef("admin", req.params.slug);
    console.log(blogArr);
    if (!blogArr) {
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
