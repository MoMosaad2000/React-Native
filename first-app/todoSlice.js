// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    completedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action) => {
      const { id } = action.payload;
      const todoToComplete = state.todos.find((todo) => todo.id === id);
      state.completedTodos.push(todoToComplete);
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.completedTodos = state.completedTodos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
