import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: null,
  photo: null,
  email: null,
  uid: null,
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state = initialState, action) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    setLogout: (state, action) => {
      state.name = null;
      state.photo = null;
      state.email = null;
      state.uid = null;
    },
    saveUser: (state = initialState, action) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
});
export const { setLogIn, setLogout, saveUser } = userSlice.actions;
export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;
export const selectUid = (state) => state.user.uid;
export const selectuser = (state) => state.user.user;
export default userSlice.reducer;
