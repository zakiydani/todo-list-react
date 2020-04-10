import React from 'react'
import { Button } from 'react-bootstrap';

const Todo = ({ todo, index, removeTodo, editTodo, completeTodo }) => {
    return (
        <div style={{  textDecorationLine : todo.isComplete ? "line-through" : ""  }}>
            <h3>{todo.text}</h3>
            <Button className="mx-2 mt-2" variant="danger" onClick={() => removeTodo(index)}>Delete</Button>
            <Button className="mx-2 mt-2" variant="info" onClick={() => editTodo(index)}>Edit</Button>
            <Button className="mx-2 mt-2" variant="secondary" onClick={() => completeTodo(index)}>Complete</Button>
        </div>
    );
};

export default Todo;