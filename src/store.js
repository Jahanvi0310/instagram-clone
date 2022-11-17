import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/User/UserSlice";
import boolReducer from "./reducer/Bool/BoolSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    bool: boolReducer,
  },
});
