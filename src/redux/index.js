import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import pricingReducer from './slices/pricingSlice';

const mainStore = configureStore({
    reducer: {
        theme: themeReducer,
        pricingPlans: pricingReducer,
    },
});

export default mainStore;
