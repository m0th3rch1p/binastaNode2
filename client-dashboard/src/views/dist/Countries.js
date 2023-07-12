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
var react_1 = require("react");
var CountryForm_1 = require("@/components/countries/CountryForm");
var countriesSlice_1 = require("@/store/reducers/countriesSlice");
var react_data_table_component_1 = require("react-data-table-component");
function Countries() {
    var _a = countriesSlice_1.useFetchCountriesQuery(), countries = _a.data, isFetchCountryLoading = _a.isLoading, isFetchCountrySuccess = _a.isSuccess, isFetchCountryError = _a.isError;
    var _b = react_1.useState({
        show: false,
        countries: []
    }), countriesState = _b[0], setCountriesState = _b[1];
    var columns = [
        {
            name: 'Name',
            selector: function (row) { return row.name; }
        },
        {
            name: 'Country Code',
            selector: function (row) { return row.country_code; }
        },
        {
            name: 'Created At',
            selector: function (row) { return new Date(row.created_at).toLocaleDateString(); }
        }
    ];
    react_1.useEffect(function () {
        if (isFetchCountrySuccess) {
            console.log(countries);
            setCountriesState(function (state) { return (__assign(__assign({}, state), { countries: countries })); });
        }
    }, [isFetchCountrySuccess, countries]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'card' },
            React.createElement("div", { className: 'card-header' },
                React.createElement("h5", null, "Countries"),
                React.createElement(CountryForm_1["default"], { show: countriesState.show }),
                React.createElement("button", { type: 'button', id: 'modalBtn', "data-bs-toggle": 'modal', "data-bs-target": '#exampleModal', className: 'btn btn-icon btn-primary', onClick: function () { return setCountriesState(function (state) { return (__assign(__assign({}, state), { show: !state.show })); }); } },
                    React.createElement("i", { className: 'bi bi-plus-circle' }),
                    countriesState.show ? 'Close' : 'Add Country')),
            React.createElement("div", { className: 'card-body' },
                React.createElement(react_data_table_component_1["default"], { data: countriesState.countries, columns: columns, responsive: true })))));
}
exports["default"] = Countries;
