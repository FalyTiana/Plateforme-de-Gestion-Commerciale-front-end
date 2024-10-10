import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import pricingReducer from './slices/pricingSlice';
import loadingReducer from './slices/loadingSlice';
import alertReducer from './slices/alertSlice'
import userReducer from './slices/userSlice';

const mainStore = configureStore({
    reducer: {
        theme: themeReducer,
        pricingPlans: pricingReducer,
        loading: loadingReducer,
        alert: alertReducer,
        user: userReducer
    },
});

export default mainStore;
