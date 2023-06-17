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
                    React.createElement("p", null, "From cutting-edge marketing strategies to productivity hacks and customer engagement, our blog covers it all. Get expert insights, practical tips, and innovative ideas tailored specifically for independent business owners like you."))),
            React.createElement("div", { className: "row grid" }, blogs === null || blogs === void 0 ? void 0 : blogs.map(function (blog) {
                var _a;
                return (React.createElement("div", { className: "col-md-4 grid-item animation", "data-animation": "fadeInUp", "data-animation-delay": "0.1s" },
                    React.createElement("div", { className: "single-blog" },
                        React.createElement("div", { className: "blog-thumb" },
                            React.createElement("img", { className: "", src: "/" + blog.image_path, alt: "" })),
                        React.createElement("div", { className: "blog-text" },
                            React.createElement("h4", null,
                                React.createElement("a", { href: "blogs/" + blog.slug }, blog.title)),
                            React.createElement("p", null, (_a = blog.description) === null || _a === void 0 ? void 0 :
                                _a.slice(0, 150),
                                "..."),
                            React.createElement("a", { className: "blog-link", href: "blogs/" + blog.slug }, "Purchase")))));
            })))));
}
exports["default"] = Blogs;
