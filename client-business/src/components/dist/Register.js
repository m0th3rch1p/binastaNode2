"use strict";
exports.__esModule = true;
var way_webp_1 = require("../assets/way.webp");
function Register() {
    return (React.createElement("div", { className: "section-consultation" },
        React.createElement("div", { className: "section-consultation__bg js-lazy", style: {
                backgroundImage: "url(" + way_webp_1["default"] + ")"
            } }),
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "consultation-form-wrap" },
                React.createElement("div", { className: "consultation-form" },
                    React.createElement("div", { className: "section-heading" },
                        React.createElement("span", null, "get started")),
                    React.createElement("h2", { className: "h2" }, "get a free consultation"),
                    React.createElement("div", { className: "content-block__text" },
                        React.createElement("p", null, "Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute dolor enim dolor labore velit nul.")),
                    React.createElement("div", { className: "consultation-form__form" },
                        React.createElement("form", null,
                            React.createElement("div", { className: "box-fileds" },
                                React.createElement("div", { className: "box-filed" },
                                    React.createElement("input", { type: "text", placeholder: "First name" })),
                                React.createElement("div", { className: "box-filed" },
                                    React.createElement("input", { type: "text", placeholder: "Second name" })),
                                React.createElement("div", { className: "box-filed" },
                                    React.createElement("input", { type: "tel", placeholder: "Enter your phone", "im-insert": "true" })),
                                React.createElement("div", { className: "box-filed" },
                                    React.createElement("input", { type: "email", placeholder: "Enter your email" })),
                                React.createElement("div", { className: "box-filed box-filed_btn" },
                                    React.createElement("input", { type: "submit", className: "btn", value: "Submit" })),
                                React.createElement("div", { className: "box-filed box-field__accept" },
                                    React.createElement("label", { className: "checkbox-element" },
                                        React.createElement("input", { type: "checkbox" }),
                                        React.createElement("span", { className: "checkbox-text" },
                                            "I accept the ",
                                            React.createElement("a", { href: "#0", target: "_blank" }, "Terms and Conditions.")))))))),
                React.createElement("div", { className: "consultation-img" },
                    React.createElement("img", { "data-src": "img/consultation.svg", alt: "", className: "js-lazy loaded", src: "img/consultation.svg", "data-was-processed": "true" }))))));
}
exports["default"] = Register;
