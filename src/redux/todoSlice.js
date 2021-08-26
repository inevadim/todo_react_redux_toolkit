import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:JSON.parse(localStorage.getItem("todos")) || []
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo(state,action){
            state.todo.push(action.payload);
        },
        deleteTodo(state,action){
            state.todo=state.todo.filter(item=>item.id !== action.payload)
        },
        chekedTodo(state,action){
            const visible=state.todo.find(item=>item.id===action.payload);
            visible.cheked=!visible.cheked
        }
    }
})

export const {addTodo,deleteTodo,chekedTodo}=todoSlice.actions;
export default todoSlice.reducer;