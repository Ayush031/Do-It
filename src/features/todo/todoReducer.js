import { createSlice, nanoid } from "@reduxjs/toolkit";
export const todoReducer = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})
export const { addTodo, removeTodo } = todoReducer.actions;

export default todoReducer.reducer;