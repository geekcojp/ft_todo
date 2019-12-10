import { configureStore } from 'redux-starter-kit';
import todoModule from '../features/todoModule';

export const setupStore = () => {
  const store = configureStore({
    reducer: todoModule.reducer,
  });
  return store;
};
