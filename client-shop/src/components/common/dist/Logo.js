"use strict";
exports.__esModule = true;
var flogo_png_1 = require("@/assets/images/flogo.png");
function Logo(props) {
    var _a, _b;
    console.log(props === null || props === void 0 ? void 0 : props.height);
    return (React.createElement("div", null,
        React.createElement("img", { src: flogo_png_1["default"], style: { width: (_a = props === null || props === void 0 ? void 0 : props.width) !== null && _a !== void 0 ? _a : "100%", height: (_b = props === null || props === void 0 ? void 0 : props.height) !== null && _b !== void 0 ? _b : "100%" }, alt: "logo" })));
}
exports["default"] = Logo;
