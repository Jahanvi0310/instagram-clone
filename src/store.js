import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import boolReducer from "./reducers/boolSlice";
export const store=configureStore({
    reducer:{
        user:userReducer,
        bool:boolReducer

    },
});
