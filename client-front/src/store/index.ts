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

import { blogsApiSlice } from './reducers/blogsSlice';
import { productApiSlice } from './reducers/productsSlice';

export const resetStore = createAction("resetStore");

const rootReducer = combineReducers({
    [ productApiSlice.reducerPath ]: productApiSlice.reducer,
    [ blogsApiSlice.reducerPath ]: blogsApiSlice.reducer,
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
    blacklist: [ productApiSlice.reducerPath, blogsApiSlice.reducerPath ]  
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(productApiSlice.middleware, blogsApiSlice.middleware))
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;