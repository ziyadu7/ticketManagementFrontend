
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    name:null,
    role:null,
    token:null
}

export const student = createSlice({
    name:'studentAuth',
    initialState,
    reducers:{
        studentLogin:(state,action)=>{
            state.name = action.payload.name,
            state.token = action.payload.token,
            state.role = action.payload.role
        },
        studentLogout:(state,action)=>{
            state.name = null,
            state.token = null,
            state.role = null
        }
    }
})

export const { studentLogin,studentLogout} = student.actions;
export default student.reducer;