import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from './todo'

import { Container, Jumbotron, Button } from 'react-bootstrap';

const Todos = () => {
    const [todos, setTodos] = useState([
        
    ]);

    const [value, setValue] = useState("");
    console.log("value", value);

    // handle Change input
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // handle Add form
    const handleAdd = (event) => {
        event.preventDefault();
        console.log("isi value", value);
        if (!value) return alert("input belum diisi");
        const newTodos = [...todos, { text: value }];
        console.log("newTodos", newTodos);
        setTodos(newTodos);
        setValue("");
    }

    // handle Remove button
    const removeTodo = (index) => {
        console.log("Clicked");
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // handle Edit 
    const editTodo = (index) => {
        console.log("Edited");
        const newTodos = [...todos];
        const editTodos = newTodos[index].text;
        console.log(editTodos);
        const editedTodo = prompt(editTodos);
        newTodos.splice(index, 1, { text: editedTodo });
        setTodos(newTodos);
    };

    // complete Todo
    const completeTodo = (index) => {
        console.log("Completed");
        const newTodos = [...todos];
        newTodos[index].isComplete = !todos[index].isComplete;
        setTodos(newTodos);
    }

    return (
        <Container>
        <Jumbotron>
        <div>
            <h1 className="mt-5">To Do List Function Base</h1>
            <form onSubmit={handleAdd}>
                <input type="text" value={value} onChange={handleChange} />
                <Button className="mx-2 px-4" variant="success" type="submit" >Add</Button>
            </form>

            {todos.map((todo, index) => (
                <Todo 
                    key={index}
                    index={index}
                    todo={todo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    completeTodo={completeTodo}
                />    
            )
            )}
        </div>
        </Jumbotron>
        </Container>
    )
}

export default Todos;