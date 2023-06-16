"use strict";
exports.__esModule = true;
function Modal(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "modal fade", id: "exampleModal", tabIndex: -1, "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
        React.createElement("div", { className: "modal-dialog" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h5", { className: "modal-title", id: "exampleModalLabel" }),
                    React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })),
                React.createElement("div", { className: "modal-body" }, children)))));
}
exports["default"] = Modal;
