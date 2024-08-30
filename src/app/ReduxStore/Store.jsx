import { configureStore } from "@reduxjs/toolkit";
import Slice from '../Slices/Slices'
export const store = configureStore({
    reducer:{
        Slice : Slice,
    }
})