import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ToDoItemProps = {
    id: string,
    title: string,
    completed: boolean
}
interface toDoList {
    list: ToDoItemProps[]
}
const initialState: toDoList = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addToDo:(state, action: PayloadAction<string>)=>{
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
              toggledTodo.completed = !toggledTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
           state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {addToDo, toggleComplete, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;