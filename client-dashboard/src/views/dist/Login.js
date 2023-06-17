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
var userSlice_1 = require("@/store/reducers/userSlice");
var hooks_1 = require("@/hooks/hooks");
var react_1 = require("react");
var react_router_1 = require("react-router");
function Login() {
    var dispatch = hooks_1.useAppDispatch();
    var navigate = react_router_1.useNavigate();
    var _a = react_1.useState({
        email: '',
        password: ''
    }), loginForm = _a[0], setLoginForm = _a[1];
    var _b = userSlice_1.useAuthenticateUserMutation(), authenticateUser = _b[0], _c = _b[1], isLoading = _c.isLoading, isSuccess = _c.isSuccess;
    react_1.useEffect(function () {
        console.log(isSuccess);
        if (isSuccess) {
            dispatch(userSlice_1.setAuthenticated(true));
            navigate("/");
        }
    }, [isSuccess]);
    var onHandleChange = function (e) {
        setLoginForm(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onHandleAuthenthenticateUser = function () {
        if (!loginForm.email || !loginForm.password)
            return;
        authenticateUser({ email: loginForm.email, password: loginForm.password });
    };
    return (React.createElement("div", { className: "form-wrapper" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "card" },
                React.createElement("div", { className: "row g-0" },
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-10 offset-md-1" },
                                React.createElement("div", { className: "d-block d-lg-none text-center text-lg-start" },
                                    React.createElement("img", { width: "120", src: "https://vetra.laborasyon.com/assets/images/logo.svg", alt: "logo" })),
                                React.createElement("div", { className: "my-5 text-center text-lg-start" },
                                    React.createElement("h1", { className: "display-8" }, "Sign In")),
                                React.createElement("form", { className: "mb-5" },
                                    React.createElement("div", { className: "mb-3" },
                                        React.createElement("input", { type: "email", name: "email", className: "form-control", placeholder: "Enter email", onChange: onHandleChange, value: loginForm.email, required: true })),
                                    React.createElement("div", { className: "mb-3" },
                                        React.createElement("input", { type: "password", name: "password", className: "form-control", onChange: onHandleChange, value: loginForm.password, placeholder: "Enter password", required: true })),
                                    React.createElement("div", { className: "text-center text-lg-start" },
                                        React.createElement("p", { className: "small" },
                                            "Can't access your account? ",
                                            React.createElement("a", { href: "#0" }, "Reset your password now"),
                                            "."),
                                        React.createElement("button", { className: "btn btn-primary", onClick: onHandleAuthenthenticateUser, disabled: isLoading }, isLoading ? 'Signing In...' : 'Sign In')))))))))));
}
exports["default"] = Login;
