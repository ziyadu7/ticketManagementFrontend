import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    name:null,
    role:null,
    token:null
}

export const admin = createSlice({
    name:'adminAuth',
    initialState,
    reducers:{
        adminLogin:(state,action)=>{
            state.name= action.payload.name,
            state.token = action.payload.token,
            state.role = action.payload.role
        },
        adminLogout:(state,action)=>{
            state.name = null,
            state.token = null,
            state.role = null
        }
    }
})

export const { adminLogout,adminLogin } = admin.actions;
export default admin.reducer;