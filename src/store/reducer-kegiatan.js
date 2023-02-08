import { createSlice } from "@reduxjs/toolkit";

export const reducerKegiatan = createSlice({
    name: 'kegiatan',
    initialState: {
        data: [],
    },
    reducers: {
        submitData: (state, action) => {
            let sample = [...state.data];
            sample.push(action.payload);
            state.data = sample;
        }
    }
});

export const { submitData } = reducerKegiatan.actions;

export default reducerKegiatan.reducer;