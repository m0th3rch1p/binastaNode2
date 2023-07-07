"use strict";
exports.__esModule = true;
var addressSlice_1 = require("@/store/reducers/addressSlice");
function Addresses() {
    var addresses = addressSlice_1.useFetchAddressesQuery().data;
    return (React.createElement("div", { className: "row" }, addresses ? addresses.map(function (address) { return (React.createElement("div", { className: "col-lg-6" },
        React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card-header" },
                React.createElement("h5", { className: "mb-0" }, "Delivery Address")),
            React.createElement("div", { className: "card-body" },
                React.createElement("address", null,
                    "Address: ",
                    address.address,
                    React.createElement("br", null),
                    "Phone Number: ",
                    address.phone_number),
                React.createElement("a", { href: "#0", className: "btn-small" }, "Edit"))))); }) : (React.createElement(React.Fragment, null))));
}
exports["default"] = Addresses;
