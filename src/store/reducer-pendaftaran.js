import { createSlice } from "@reduxjs/toolkit";

export const reducerPendaftaran = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        submitDataUser: (state, action) => {
            let sample = [...state.data];
            sample.push(action.payload);
            state.data = sample;
        },
    }
});

export const { submitDataUser } = reducerPendaftaran.actions;

export default reducerPendaftaran.reducer;