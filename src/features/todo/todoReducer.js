import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    completedTodos: [],
    theme: localStorage.getItem("theme") || "light",
    gridType: localStorage.getItem("gridType") || false,
};

export const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false,
            };
            state.todos.unshift(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        changeGridType: (state, action) => {
            state.gridType = action.payload;
            localStorage.setItem("gridType", action.payload);
        }
    },
});

export const { addTodo, removeTodo, completeTodo, changeTheme, changeGridType } = todoReducer.actions;

export default todoReducer.reducer;