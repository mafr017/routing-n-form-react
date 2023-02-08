import { configureStore } from "@reduxjs/toolkit";
import reducerKegiatan from "./reducer-kegiatan";

export default configureStore({
    reducer: {
        kegiatan: reducerKegiatan,
    },
})