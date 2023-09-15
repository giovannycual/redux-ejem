import { createSlice } from "@reduxjs/toolkit";
import {userList} from './Data'

const userSlice=createSlice({
    name: 'user',
    initialState:userList,
    reducers:{
        addUSer:(state,action)=>{
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const{id,name,email}=action.payload
            const uu=state.find(user=>user.id==id)
            if(uu){
                uu.name=name;
                uu.email=email
            }
        },
        deleteUser:(state,action)=>{
            const{id}=action.payload
            const uu=state.find(user=>user.id==id)
            if(uu){
                return state.filter(filter=>filter.id !== id);
            }
        }
    }
})
export const {addUSer,updateUser,deleteUser}=userSlice.actions
export default userSlice.reducer