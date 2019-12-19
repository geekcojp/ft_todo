import React from 'react';
import { useDispatch } from 'react-redux';
import todosModules, { useTodoItems } from '../todoModule';
import Button from '../../components/Button';

const ShowTodo: React.FC = () => {

    const todo = useTodoItems();

    const dispatch = useDispatch();

    const handleDeleteItem = (itemId: number) => {
        dispatch(todosModules.actions.deleteItem(itemId));
    };

    return (
        <div className="ShowTodo">
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Deadline</th>
                    </tr>
                    {todo.map((value, key) => {
                        return (
                            <tr key={key} >
                                <td>{value.id}</td>
                                <td>{value.task}</td>
                                <td>{value.priority}</td>
                                <td>{value.deadline}</td>
                                <td><Button onClick={() => handleDeleteItem(value.id)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTodo;
