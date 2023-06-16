"use strict";
exports.__esModule = true;
var blogsSlice_1 = require("@/store/reducers/blogsSlice");
var react_router_dom_1 = require("react-router-dom");
function SingleBlog() {
    var slug = react_router_dom_1.useParams().slug;
    var blog = blogsSlice_1.useFetchBlogBySlugQuery(slug).data;
    return (React.createElement("div", { className: 'page-content minus-padding' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-lg-12' },
                    React.createElement("article", { className: 'single-blog-detials' },
                        React.createElement("img", { src: 'assets/images/all-img/blogd.jpg', alt: '' }),
                        React.createElement("ul", { className: 'post-meta  d-flex justify-content-between' },
                            React.createElement("li", null,
                                React.createElement("a", { href: '#0' },
                                    React.createElement("i", { className: 'icofont' }, "ui_calendar"),
                                    " ",
                                    new Date(blog === null || blog === void 0 ? void 0 : blog.created_at).toLocaleDateString()))),
                        React.createElement("h2", null, blog === null || blog === void 0 ? void 0 : blog.title), blog === null || blog === void 0 ? void 0 :
                        blog.post),
                    React.createElement("hr", null))))));
}
exports["default"] = SingleBlog;
