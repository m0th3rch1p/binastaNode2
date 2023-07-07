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
var hooks_1 = require("@/store/hooks");
var userSlice_1 = require("@/store/reducers/userSlice");
var react_router_dom_1 = require("react-router-dom");
var flogo_png_1 = require("@/assets/images/flogo.png");
var react_1 = require("react");
function Login() {
    var dispatch = hooks_1.useAppDispatch();
    var navigate = react_router_dom_1.useNavigate();
    var _a = userSlice_1.useAuthenticateUserMutation(), authenticate = _a[0], _b = _a[1], isAuthenticationLoading = _b.isLoading, isAuthenticationSuccess = _b.isSuccess, isAuthenticationError = _b.isError;
    var _c = react_1.useState({
        email: "",
        password: ""
    }), loginForm = _c[0], setLoginForm = _c[1];
    react_1.useEffect(function () {
        if (isAuthenticationSuccess) {
            dispatch(userSlice_1.setAuthenticated(true));
            navigate("/dashboard");
        }
    }, [isAuthenticationSuccess, dispatch, navigate]);
    var onFormChange = function (e) {
        setLoginForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onAuthenticate = function (e) {
        e.preventDefault();
        if (!loginForm.email || !loginForm.password)
            return;
        authenticate(loginForm);
    };
    return (React.createElement("div", { className: "form-wrapper" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "card" },
                React.createElement("div", { className: "row g-0" },
                    React.createElement("div", { className: "col" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-10 offset-md-1" },
                                React.createElement("div", { className: "d-block d-lg-none text-center text-lg-start" },
                                    React.createElement("img", { width: "120", src: flogo_png_1["default"], alt: "logo" })),
                                React.createElement("div", { className: "my-5 text-center text-lg-start" },
                                    React.createElement("h1", { className: "display-8" }, "Sign In"),
                                    React.createElement("p", { className: "text-muted" }, "Sign in to Vetra to continue")),
                                React.createElement("form", { className: "mb-5" },
                                    React.createElement("div", { className: "mb-3" },
                                        React.createElement("input", { type: "email", name: "email", onChange: onFormChange, className: "form-control", placeholder: "Enter email", required: true })),
                                    React.createElement("div", { className: "mb-3" },
                                        React.createElement("input", { type: "password", name: "password", onChange: onFormChange, className: "form-control", placeholder: "Enter password", required: true })),
                                    React.createElement("div", { className: "text-center text-lg-start" },
                                        React.createElement("p", { className: "small" },
                                            "Can't access your account? ",
                                            React.createElement("a", { href: "#" }, "Reset your password now"),
                                            "."),
                                        React.createElement("button", { className: "btn btn-primary", onClick: onAuthenticate }, isAuthenticationLoading ? "Siging in...." : "Sign In"))),
                                React.createElement("p", { className: "text-center d-block d-lg-none mt-5 mt-lg-0" },
                                    "Don't have an account? ",
                                    React.createElement(react_router_dom_1.Link, { to: "/register" }, "Sign up"),
                                    ".")))),
                    React.createElement("div", { className: "col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center" },
                        React.createElement("div", { className: "logo" },
                            React.createElement("img", { width: "120", src: flogo_png_1["default"], alt: "logo" })),
                        React.createElement("div", null,
                            React.createElement("h3", { className: "fw-bold" }, "Welcome to Binasta!"),
                            React.createElement("p", { className: "lead my-5" }, "If you don't have an account, would you like to register right now?"),
                            React.createElement("a", { href: "#", className: "btn btn-primary" }, "Sign Up")),
                        React.createElement("ul", { className: "list-inline" },
                            React.createElement("li", { className: "list-inline-item" },
                                React.createElement("a", { href: "#" }, "Privacy Policy")),
                            React.createElement("li", { className: "list-inline-item" },
                                React.createElement("a", { href: "#" }, "Terms & Conditions")))))))));
}
exports["default"] = Login;
