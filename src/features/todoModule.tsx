import { createSlice, PayloadAction } from 'redux-starter-kit';
import { useSelector } from "react-redux";
import { Items, Item } from './types';
import { AddItem } from './AddTodo/types';

const initialStateTodo: Items = [];

const todoModule = createSlice({
  name: 'todo',
  initialState: initialStateTodo,
  reducers: {
    addItem: (state: Items, action: PayloadAction<AddItem>) => {
      const item = {
        id: state.length + 1,
        task: action.payload.task,
        priority: action.payload.priority,
        deadline: action.payload.deadline,
      };
      return [
        ...state,
        item
      ];
    },
    deleteItem: (state: Items, action: PayloadAction<Item["id"]>) => {
      return state.filter((item) => item.id !== action.payload);
    }
  },

});

export const useTodoItems = () => {
  return useSelector((state: Items) => state);
}

export default todoModule;
