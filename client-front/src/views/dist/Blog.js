"use strict";
exports.__esModule = true;
var blogsSlice_1 = require("@/store/reducers/blogsSlice");
var react_router_dom_1 = require("react-router-dom");
function Blog() {
    var blogs = blogsSlice_1.useFetchBlogsQuery().data;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'page-banner' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'row align-items-center justify-content-center page-bn-height' },
                    React.createElement("div", { className: 'col-12 text-center' },
                        React.createElement("h3", null, "Blog"),
                        React.createElement("nav", { "aria-label": 'breadcrumb' },
                            React.createElement("ol", { className: 'breadcrumb site-breadcumb-1 justify-content-center' },
                                React.createElement("li", { className: 'breadcrumb-item' },
                                    React.createElement(react_router_dom_1.Link, { className: '', to: '/' }, "Home")),
                                React.createElement("li", { className: 'breadcrumb-item active', "aria-current": 'page' }, "Blog"))))))),
        React.createElement("div", { className: "blog-area page-blog" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row grid", style: { position: 'relative', height: '877px' } }, blogs === null || blogs === void 0 ? void 0 : blogs.map(function (blog) { return (React.createElement("div", { className: "col-lg-4 col-md-6 col-12 grid-item" },
                    React.createElement("article", { className: "single-blog sticky" },
                        React.createElement("div", { className: "blog-thumb" },
                            React.createElement("img", { className: "", src: "/" + blog.image_path, alt: "" }),
                            React.createElement("ul", { className: "post-meta d-flex justify-content-between" },
                                React.createElement("li", null,
                                    React.createElement("i", { className: "icofont" }, "ui_calendar"),
                                    new Date(blog.created_at).toLocaleDateString()))),
                        React.createElement("div", { className: "blog-text" },
                            React.createElement("h4", null,
                                React.createElement(react_router_dom_1.Link, { to: "/blog/" + blog.slug }, blog.title)),
                            React.createElement("p", null,
                                blog.description,
                                React.createElement(react_router_dom_1.Link, { to: "/blog/" + blog.slug }, "[...]")))))); }))))));
}
exports["default"] = Blog;
