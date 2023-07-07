"use strict";
exports.__esModule = true;
var addressSlice_1 = require("@/store/reducers/addressSlice");
function Addresses() {
    var _a = addressSlice_1.useFetchAddressesQuery(), addresses = _a.data, isFetchAddressesLoading = _a.isLoading, isFetchAddressesError = _a.isError;
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-12" },
            React.createElement("div", { className: "row g-4 mb-4" }, addresses === null || addresses === void 0 ? void 0 : addresses.map(function (address) { return (React.createElement("div", { className: "col-md-6 col-sm-12" },
                React.createElement("div", { className: "card" },
                    React.createElement("div", { className: "card-body d-flex flex-column gap-3" },
                        React.createElement("div", { className: "d-flex justify-content-between align-items-center" },
                            React.createElement("h5", { className: "mb-0" }, "Delivery Location"),
                            React.createElement("a", { href: "#" }, "Edit")),
                        React.createElement("div", null, address.address),
                        React.createElement("div", null,
                            React.createElement("i", { className: "bi bi-telephone me-2" }),
                            " ",
                            address.phone_number))))); })),
            React.createElement("p", null,
                React.createElement("a", { className: "btn btn-outline-primary btn-icon", "data-bs-toggle": "collapse", href: "#collapseExample", role: "button", "aria-expanded": "false", "aria-controls": "collapseExample" },
                    React.createElement("i", { className: "bi bi-plus-circle" }),
                    " Add New Address")))));
}
exports["default"] = Addresses;
