"use strict";
var _a;
exports.__esModule = true;
exports.persistor = exports.resetStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var toolkit_2 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var blogsSlice_1 = require("./reducers/blogsSlice");
var productsSlice_1 = require("./reducers/productsSlice");
exports.resetStore = toolkit_2.createAction("resetStore");
var rootReducer = toolkit_1.combineReducers((_a = {},
    _a[productsSlice_1.productApiSlice.reducerPath] = productsSlice_1.productApiSlice.reducer,
    _a[blogsSlice_1.blogsApiSlice.reducerPath] = blogsSlice_1.blogsApiSlice.reducer,
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
    blacklist: [productsSlice_1.productApiSlice.reducerPath, blogsSlice_1.blogsApiSlice.reducerPath]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, appReducer);
var store = toolkit_2.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) { return (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER]
        }
    }).concat(productsSlice_1.productApiSlice.middleware, blogsSlice_1.blogsApiSlice.middleware)); }
});
exports.persistor = redux_persist_1.persistStore(store);
exports["default"] = store;
