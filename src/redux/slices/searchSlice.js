import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload;
        },
        
    },
});

export const { changeValue } = searchSlice.actions;

export default searchSlice.reducer;