"use strict";
var _a;
exports.__esModule = true;
exports.persistor = exports.resetStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var toolkit_2 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var userSlice_1 = require("@/store/reducers/userSlice");
var blogsSlice_1 = require("./reducers/blogsSlice");
var productCategoriesSlice_1 = require("./reducers/productCategoriesSlice");
var blogCategoriesSlice_1 = require("./reducers/blogCategoriesSlice");
var productsSlice_1 = require("./reducers/productsSlice");
var distributorsSlice_1 = require("./reducers/distributorsSlice");
exports.resetStore = toolkit_2.createAction("resetStore");
var rootReducer = toolkit_1.combineReducers((_a = {
        user: userSlice_1["default"]
    },
    _a[userSlice_1.userApiSlice.reducerPath] = userSlice_1.userApiSlice.reducer,
    _a[productCategoriesSlice_1.productCategoryApiSlice.reducerPath] = productCategoriesSlice_1.productCategoryApiSlice.reducer,
    _a[productsSlice_1.productApiSlice.reducerPath] = productsSlice_1.productApiSlice.reducer,
    _a[blogCategoriesSlice_1.blogCategoriesApiSlice.reducerPath] = blogCategoriesSlice_1.blogCategoriesApiSlice.reducer,
    _a[blogsSlice_1.blogsApiSlice.reducerPath] = blogsSlice_1.blogsApiSlice.reducer,
    _a[distributorsSlice_1.distributorsApiSlice.reducerPath] = distributorsSlice_1.distributorsApiSlice.reducer,
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
    blacklist: [userSlice_1.userApiSlice.reducerPath, productCategoriesSlice_1.productCategoryApiSlice.reducerPath, productsSlice_1.productApiSlice.reducerPath, blogCategoriesSlice_1.blogCategoriesApiSlice.reducerPath, blogsSlice_1.blogsApiSlice.reducerPath, distributorsSlice_1.distributorsApiSlice.reducerPath]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, appReducer);
var store = toolkit_2.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) { return (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER]
        }
    }).concat(userSlice_1.userApiSlice.middleware, productCategoriesSlice_1.productCategoryApiSlice.middleware, productsSlice_1.productApiSlice.middleware, blogCategoriesSlice_1.blogCategoriesApiSlice.middleware, blogsSlice_1.blogsApiSlice.middleware, distributorsSlice_1.distributorsApiSlice.middleware)); }
});
exports.persistor = redux_persist_1.persistStore(store);
exports["default"] = store;
