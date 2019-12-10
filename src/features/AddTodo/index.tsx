import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { AddItem } from './types';
import todosModules from '../todoModule';

const priorityList = ['high', 'middle', 'low'];

const AddTodo: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const item: AddItem = {
      task: task,
      priority: priority,
      deadline: deadline,
    };
    if (task !== "") {
      dispatch(todosModules.actions.addItem(item));
      setTask('');
      setPriority('');
      setDeadline('');
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
