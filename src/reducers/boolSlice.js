import { createSlice } from "@reduxjs/toolkit";
const initialState={
    bool:true,
};
const boolSlice=createSlice({
    name:'bool',
    initialState,
    reducers:{
        setBool:(state,action)=>{
            state.bools=action.payload.bools;
        },
    },
});
export const {setBool}=boolSlice.actions;
export const selectBoolean=(state)=>state.bool.bools;
export default boolSlice.reducer;

