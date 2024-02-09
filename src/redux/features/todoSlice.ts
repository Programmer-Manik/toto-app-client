import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TTodos = {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  status?: string;
  priority?: string;
};

type TInitialTodoState = {
  todos: TTodos[];
};

const initialTodo: TInitialTodoState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { title, description, priority } = action.payload;
      const updated = state.todos.filter(
        (todo) => todo.id === action.payload?.id
      );

      if (updated) {
        updated[0].title = title;
        updated[0].description = description;
        updated[0].priority = priority;
      }
    },

    toggleCompleted: (state, action: PayloadAction<string>) => {
      const toggledItem = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledItem) {
        toggledItem.isCompleted = !toggledItem.isCompleted;
      }
      state.todos.sort((a, b) =>
        a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
      );
    },
  },
});

export const { addTodo, toggleCompleted, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
