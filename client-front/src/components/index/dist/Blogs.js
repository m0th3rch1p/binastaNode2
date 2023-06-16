"use strict";
exports.__esModule = true;
var blogsSlice_1 = require("@/store/reducers/blogsSlice");
function Blogs() {
    var blogs = blogsSlice_1.useFetchBlogsQuery().data;
    return (React.createElement("section", { className: "blog-area" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-8 offset-lg-2 section-wrapper text-center" },
                    React.createElement("h3", { className: "section-title" }, "Check Out Our Blog"),
                    React.createElement("p", null, "Lorem ipsum dolor sit amet,sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, consetetur sadipscing elitr, Stet clita kasd gubergren"))),
            React.createElement("div", { className: "row grid" }, blogs === null || blogs === void 0 ? void 0 : blogs.map(function (blog) { return (React.createElement("div", { className: "col-md-4 grid-item animation", "data-animation": "fadeInUp", "data-animation-delay": "0.1s" },
                React.createElement("div", { className: "single-blog" },
                    React.createElement("div", { className: "blog-thumb" },
                        React.createElement("img", { className: "", src: "/" + blog.image_path, alt: "" })),
                    React.createElement("div", { className: "blog-text" },
                        React.createElement("h4", null,
                            React.createElement("a", { href: "blogs/" + blog.slug }, blog.title)),
                        React.createElement("p", null, blog.description),
                        React.createElement("a", { className: "blog-link", href: "blogs/" + blog.slug }, "Purchase"))))); })))));
}
exports["default"] = Blogs;
