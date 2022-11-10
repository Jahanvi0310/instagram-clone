import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User/userSlice";
import boolReducer from "./reducers/Bool/boolSlice";
export const store=configureStore({
    reducer:{
        user:userReducer,
        bool:boolReducer

    },
});
