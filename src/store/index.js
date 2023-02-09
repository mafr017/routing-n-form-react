import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerKegiatan from "./reducer-kegiatan";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web 
import reducerPendaftaran from "./reducer-pendaftaran";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['kegiatan', 'users']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    kegiatan: reducerKegiatan,
    users: reducerPendaftaran,
}));

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production', //devtools will not show in production
})

export const persistor = persistStore(store);