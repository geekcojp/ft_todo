import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { AddItem } from './types';
import todosModules from '../todoModule';

const priorityList = ['high', 'middle', 'low'];

const getToday = () => {
  const date = new Date();
  date.setDate(date.getDate());
  const yyyy = date.getFullYear();
  const mm = ("0" + (date.getMonth() + 1)).slice(-2);
  const dd = ("0" + date.getDate()).slice(-2);
  return `${yyyy}-${mm}-${dd}`;
}

const AddTodo: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<string>('high');
  const [deadline, setDeadline] = useState<string>(getToday());

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const item: AddItem = {
      task: task,
      priority: priority,
      deadline: deadline,
    };
    if (task && priority && deadline !== "") {
      dispatch(todosModules.actions.addItem(item));
      setTask('');
      setPriority('');
      setDeadline(getToday());
    }
  };
  return (
    <div className="AddTodo">
      <Input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <Select option={priorityList} value={priority} onChange={e => setPriority(e.target.value)}></Select>
      <Input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <Button onClick={handleAddItem}>Add</Button>
    </div>
  );
};

export default AddTodo;
