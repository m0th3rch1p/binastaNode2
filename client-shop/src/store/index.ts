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

import productCategoryReducer, { productCategoryApiSlice } from './reducers/productCategorySlice';
import productsReducer, { productApiSlice } from './reducers/productsSlice';
import userReducer, { userApiSlice } from '@/store/reducers/userSlice';
import ordersReducer, { orderApiSlice }  from './reducers/ordersSlice';
import addressesReducer, { addressApiSlice } from './reducers/addressSlice';
import cartReducer from './reducers/cartSlice';

export const resetStore = createAction("resetStore");

const rootReducer = combineReducers({
    user: userReducer,
    orders: ordersReducer,
    addresses: addressesReducer,
    productCategories: productCategoryReducer,
    products: productsReducer,
    cart: cartReducer,
    [ userApiSlice.reducerPath ]: userApiSlice.reducer,
    [ orderApiSlice.reducerPath ]: orderApiSlice.reducer,
    [ addressApiSlice.reducerPath ]: addressApiSlice.reducer,
    [ productCategoryApiSlice.reducerPath ]: productCategoryApiSlice.reducer,
    [ productApiSlice.reducerPath ]: productApiSlice.reducer
})

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
    blacklist: [ userApiSlice.reducerPath , orderApiSlice.reducerPath, addressApiSlice.reducerPath, productApiSlice.reducerPath, productCategoryApiSlice.reducerPath ]  
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(userApiSlice.middleware, orderApiSlice.middleware, addressApiSlice.middleware, productApiSlice.middleware, productCategoryApiSlice.middleware))
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;