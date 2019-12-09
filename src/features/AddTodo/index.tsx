import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const priority = ['high', 'middle', 'low'];

const AddTodo: React.FC = () => {
    return (
        <div className="">
            <Input type="text" />
            <Select option={priority}></Select>
            <Input type="date" />
            <Button>delete</Button>
        </div>
    );
}

export default AddTodo;
