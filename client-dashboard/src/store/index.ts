import { combineReducers } from '@reduxjs/toolkit';

import { configureStore, createAction } from '@reduxjs/toolkit';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"

import userReducer, { userApiSlice } from '@/store/reducers/userSlice';
import { blogsApiSlice } from './reducers/blogsSlice';
import { productCategoryApiSlice } from './reducers/productCategoriesSlice';
import { blogCategoriesApiSlice } from './reducers/blogCategoriesSlice';
import { productApiSlice } from './reducers/productsSlice';
import { distributorsApiSlice } from './reducers/distributorsSlice';
import { countriesApiSlice } from './reducers/countriesSlice';
import { ordersApiSlice } from './reducers/ordersSlice';
import { distributorOrdersApiSlice } from './reducers/distributorOrdersSlice';

export const resetStore = createAction("resetStore");

const rootReducer = combineReducers({
    user: userReducer,
    [ userApiSlice.reducerPath ]: userApiSlice.reducer,
    [ productCategoryApiSlice.reducerPath ]: productCategoryApiSlice.reducer,
    [ productApiSlice.reducerPath ]: productApiSlice.reducer,
    [ blogCategoriesApiSlice.reducerPath ]: blogCategoriesApiSlice.reducer,
    [ blogsApiSlice.reducerPath ]: blogsApiSlice.reducer,
    [ distributorsApiSlice.reducerPath ]: distributorsApiSlice.reducer,
    [ countriesApiSlice.reducerPath ]: countriesApiSlice.reducer,
    [ ordersApiSlice.reducerPath ]: ordersApiSlice.reducer,
    [ distributorOrdersApiSlice.reducerPath ]: distributorOrdersApiSlice.reducer
});

const appReducer: typeof rootReducer = (state, action) => {
    if (action.type === resetStore.type) {
        return rootReducer(undefined, action);
    }
    return rootReducer(state, action);
};

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [ userApiSlice.reducerPath, productCategoryApiSlice.reducerPath, productApiSlice.reducerPath, blogCategoriesApiSlice.reducerPath, blogsApiSlice.reducerPath, distributorsApiSlice.reducerPath, countriesApiSlice.reducerPath, ordersApiSlice.reducerPath, distributorOrdersApiSlice.reducerPath ]  
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(userApiSlice.middleware, productCategoryApiSlice.middleware, productApiSlice.middleware, blogCategoriesApiSlice.middleware, blogsApiSlice.middleware, distributorsApiSlice.middleware, countriesApiSlice.middleware, ordersApiSlice.middleware, distributorOrdersApiSlice.middleware))
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;