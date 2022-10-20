import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/User/userSlice";
import boolReducer from "./reducer/Bool/boolSlice";
export const store=configureStore({
    reducer:{
        user:userReducer,
        bool:boolReducer

    }
  });
  

