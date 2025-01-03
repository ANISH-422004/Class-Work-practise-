import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};

const taskslice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add : (state,action)=>{
        state.tasks.push(action.payload)
    },
    del : (state,action)=>{
        console.log(action.payload); //id
        // console.log(state.tasks);
        let idtoremove = action.payload
        state.tasks.splice(idtoremove,1) 
    
    }

  },
});

export default taskslice.reducer;



export const {add,del} =  taskslice.actions