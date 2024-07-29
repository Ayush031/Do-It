import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    theme: "",
    gridType: localStorage.getItem("gridType") || false,
    selectedTodo: null,
    completedTodos: []
};

export const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                checked: false,
            };
            state.todos.unshift(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },
        changeGridType: (state, action) => {
            state.gridType = action.payload;
            localStorage.setItem("gridType", action.payload);
        },
        todoStatus: (state) => {
            state.completedTodos = state.todos.filter((todo) => todo.checked);
        },
        selectTodo: (state, action) => {
            state.selectedTodo = state.todos.find(todo => todo.id === action.payload) || null;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, changeTheme, changeGridType, selectTodo } = todoReducer.actions;

export default todoReducer.reducer;