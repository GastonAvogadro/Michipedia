import { configureStore } from '@reduxjs/toolkit';
import offsetReducer from '@/redux/slices/offsetSlice';
import searchReducer from '@/redux/slices/searchSlice';
import catDataReducer from '@/redux/slices/catDataSlice';

export const store = configureStore({
    reducer: {
        offset: offsetReducer,
        search: searchReducer,
        catData: catDataReducer,
    },
});
