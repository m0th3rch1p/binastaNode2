"use strict";
exports.__esModule = true;
var react_google_autocomplete_1 = require("react-google-autocomplete");
function Billing(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { method: "post" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "form-group col-lg-6" },
                    React.createElement(react_google_autocomplete_1["default"], { apiKey: "AIzaSyBoR-KFcg8yHE4-x5xw4ixAQxYhkPbM4Tc", options: {
                            componentRestrictions: { country: 'ke' },
                            types: []
                        }, onPlaceSelected: function (place) {
                            props.form.address = place.formatted_address;
                        } })),
                React.createElement("div", { className: "form-group col-lg-6" },
                    React.createElement("input", { type: "text", onChange: props.onChangeFn, required: true, value: props.form.phone_number, name: "phone_number", placeholder: "Phone number *" }))))));
}
exports["default"] = Billing;
