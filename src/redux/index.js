import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

const mainStore = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default mainStore;
