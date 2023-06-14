import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

export const catDataSlice = createSlice({
    name: 'catData',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload;
        },
        
    },
});

export const { changeValue } = catDataSlice.actions;

export default catDataSlice.reducer;