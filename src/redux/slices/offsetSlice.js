import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const offsetSlice = createSlice({
    name: 'offset',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 20;
        },
        decrement: (state) => {
            state.value -= 20;
        },
    },
});

export const { increment, decrement } = offsetSlice.actions;

export default offsetSlice.reducer;
