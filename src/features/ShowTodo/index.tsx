import React from 'react';
import { useTodoItems } from '../todoModule';

const ShowTodo: React.FC = () => {

    const todo = useTodoItems();

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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTodo;
