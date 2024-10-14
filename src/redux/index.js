import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utilise localStorage par défaut
import themeReducer from "./slices/themeSlice";
import pricingReducer from "./slices/pricingSlice";
import loadingReducer from "./slices/loadingSlice";
import alertReducer from "./slices/alertSlice";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productSlice"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Configuration pour persister userSlice
const userPersistConfig = {
    key: "user",
    storage, // Utilise localStorage
};

// Création du reducer persistant pour userSlice
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// Configuration du store avec le middleware qui ignore les actions non sérialisables de redux-persist
const mainStore = configureStore({
    reducer: {
        theme: themeReducer,
        pricingPlans: pricingReducer,
        loading: loadingReducer,
        alert: alertReducer,
        products : productsReducer,
        user: persistedUserReducer, // Utilise le reducer persistant pour user
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore les actions non sérialisables liées à redux-persist
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(mainStore);

export default mainStore;
