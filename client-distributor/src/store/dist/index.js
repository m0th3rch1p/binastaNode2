"use strict";
var _a;
exports.__esModule = true;
exports.persistor = exports.resetStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var toolkit_2 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var countriesSlice_1 = require("./reducers/dist/countriesSlice");
var productCategorySlice_1 = require("./reducers/productCategorySlice");
var productsSlice_1 = require("./reducers/productsSlice");
var userSlice_1 = require("@/store/reducers/userSlice");
var ordersSlice_1 = require("./reducers/ordersSlice");
var addressSlice_1 = require("./reducers/addressSlice");
var cartSlice_1 = require("./reducers/cartSlice");
exports.resetStore = toolkit_2.createAction("resetStore");
var rootReducer = toolkit_1.combineReducers((_a = {
        user: userSlice_1["default"],
        orders: ordersSlice_1["default"],
        addresses: addressSlice_1["default"],
        productCategories: productCategorySlice_1["default"],
        products: productsSlice_1["default"],
        cart: cartSlice_1["default"]
    },
    _a[countriesSlice_1.countriesApiSlice.reducerPath] = countriesSlice_1.countriesApiSlice.reducer,
    _a[userSlice_1.userApiSlice.reducerPath] = userSlice_1.userApiSlice.reducer,
    _a[ordersSlice_1.orderApiSlice.reducerPath] = ordersSlice_1.orderApiSlice.reducer,
    _a[addressSlice_1.addressApiSlice.reducerPath] = addressSlice_1.addressApiSlice.reducer,
    _a[productCategorySlice_1.productCategoryApiSlice.reducerPath] = productCategorySlice_1.productCategoryApiSlice.reducer,
    _a[productsSlice_1.productApiSlice.reducerPath] = productsSlice_1.productApiSlice.reducer,
    _a));
var appReducer = function (state, action) {
    if (action.type === exports.resetStore.type) {
        return rootReducer(undefined, action);
    }
    return rootReducer(state, action);
};
var persistConfig = {
    key: 'root',
    version: 1,
    storage: storage_1["default"],
    blacklist: [userSlice_1.userApiSlice.reducerPath, ordersSlice_1.orderApiSlice.reducerPath, addressSlice_1.addressApiSlice.reducerPath, productsSlice_1.productApiSlice.reducerPath, productCategorySlice_1.productCategoryApiSlice.reducerPath, countriesSlice_1.countriesApiSlice.reducerPath]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, appReducer);
var store = toolkit_2.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) { return (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER]
        }
    }).concat(userSlice_1.userApiSlice.middleware, ordersSlice_1.orderApiSlice.middleware, addressSlice_1.addressApiSlice.middleware, productsSlice_1.productApiSlice.middleware, productCategorySlice_1.productCategoryApiSlice.middleware, countriesSlice_1.countriesApiSlice.middleware)); }
});
exports.persistor = redux_persist_1.persistStore(store);
exports["default"] = store;
