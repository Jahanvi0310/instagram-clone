import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User/userSlice";
import boolReducer from "./features/Bool/boolSlice";
export const store=configureStore({
    reducer:{./reducer/userSlice
        user:userReducer,./reducer/boolSlice
        bool:boolReducer

    },
});
