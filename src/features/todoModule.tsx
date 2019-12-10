import { createSlice, PayloadAction } from 'redux-starter-kit';
import { Items } from './types';
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
      state.push(item);
    },
  },
});

export default todoModule;
