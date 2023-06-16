"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var blogCategoriesSlice_1 = require("@/store/reducers/blogCategoriesSlice");
var blogsSlice_1 = require("@/store/reducers/blogsSlice");
var react_1 = require("react");
function Blog() {
    var _a = blogsSlice_1.useStoreBlogMutation(), storeBlog = _a[0], _b = _a[1], isLoading = _b.isLoading, isSuccess = _b.isSuccess;
    var categories = blogCategoriesSlice_1.useFetchBlogCategoriesQuery().data;
    console.log(categories);
    var _c = react_1.useState({
        blog_category_id: 0,
        title: "",
        description: "",
        post: "",
        file: null
    }), blogForm = _c[0], setBlogForm = _c[1];
    var onHandleChange = function (e) {
        setBlogForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onHandleFileChange = function (e) {
        if (e.target.files && e.target.files.length) {
            setBlogForm(function (state) { var _a; return (__assign(__assign({}, state), { file: (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0] })); });
        }
    };
    var onStoreBlog = function (e) {
        if (!blogForm.blog_category_id || !blogForm.title || !blogForm.description || !blogForm.post || !blogForm.file)
            return;
        var form = new FormData();
        form.append("title", blogForm.title);
        form.append("blog_category_id", "" + blogForm.blog_category_id);
        form.append("description", blogForm.description);
        form.append("post", blogForm.post);
        form.append("img", blogForm.file);
        storeBlog(form);
    };
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col" },
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", null, "Blog Title"),
                    react_1["default"].createElement("input", { type: "text", name: "title", value: blogForm.title, onChange: onHandleChange, className: "form-control", required: true })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", null, "Blog Category"),
                    react_1["default"].createElement("select", { className: "form-control", value: blogForm.blog_category_id, onChange: onHandleChange, name: "blog_category_id", required: true },
                        react_1["default"].createElement("option", { value: "", selected: true }, "Select Product Category"), categories === null || categories === void 0 ? void 0 :
                        categories.map(function (category) { return (react_1["default"].createElement("option", { value: category.id }, category.name)); }))),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", null, "Blog Description"),
                    react_1["default"].createElement("input", { type: "text", name: "description", value: blogForm.description, onChange: onHandleChange, className: "form-control", required: true })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", null, "Blog Post"),
                    react_1["default"].createElement("input", { type: "text", name: "post", value: blogForm.post, onChange: onHandleChange, className: "form-control", required: true })),
                react_1["default"].createElement("div", { className: "form-group" },
                    react_1["default"].createElement("label", null, "Blog Images"),
                    react_1["default"].createElement("input", { type: "file", onChange: onHandleFileChange, className: "form-control", multiple: true, required: true })))),
        react_1["default"].createElement("div", { className: "form-group mt-4" },
            react_1["default"].createElement("button", { id: "submitBtn", onClick: onStoreBlog, className: "btn btn-primary", disabled: isLoading }, isLoading ? 'Saving...' : 'Save'))));
}
exports["default"] = Blog;
