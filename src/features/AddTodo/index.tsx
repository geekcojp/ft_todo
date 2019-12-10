import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { AddItem } from './types';
import todosModules from '../todoModule';

const priority = ['high', 'middle', 'low'];

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    const item: AddItem = {
      task: 'task',
      priority: 'high',
      deadline: '2020/01/01',
    };
    dispatch(todosModules.actions.addItem(item));
  };
  return (
    <div className="">
      <Input type="text" />
      <Select option={priority}></Select>
      <Input type="date" />
      <Button onClick={handleAddItem}>Add</Button>
    </div>
  );
};

export default AddTodo;
