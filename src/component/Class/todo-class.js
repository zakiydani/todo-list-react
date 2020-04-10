import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Jumbotron, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


class Todo extends Component {
  constructor(){
    super()
    this.state = {
        todoList : [],
        todoInput : "",
        isComplete : false,
    }
}

clickChange = (event) => {
    // console.log("CLICKCHANGE", event)
    this.setState({
        [event.target.name]: event.target.value
    })
}

clickAdd = () => {
    this.setState({
        todoList: [...this.state.todoList, this.state.todoInput],
        todoInput: ""
    })
}



clickDelete = (index) => {
    // console.log("sudah diklik")
    const newtodoInput = [...this.state.todoList];
    // console.log(newtodoInput)
    newtodoInput.splice(index, 1);
    this.setState({todoList :newtodoInput})
}

clickEdit = (index) => {
    // console.log("diklik");
    const newtodoInput = [...this.state.todoList];
    const editInput = newtodoInput[index];
    // console.log(editInput)
    const editedInput = prompt(editInput);
    newtodoInput.splice(index, 1, editedInput);
    this.setState({todoList :newtodoInput})
}

clickComplete = (index) => {
    // console.log("click")
    const newtodoInput = [...this.state.todoList];
    newtodoInput[index] = !this.state.todoList[index].isComplete;
    
    this.setState({todoList :newtodoInput})
}

render () {
    return (
        <Container>
        <Jumbotron>
        <div>
            <h1 className="mt-5">To Do List Class Base</h1>
                <input type="input" name="todoInput" value={this.state.todoInput} onChange={this.clickChange} />         
                <Button className="mx-2 px-4" variant="success" onClick={this.clickAdd}>Add</Button>
            
            {this.state.todoList.map((item, index) =>(
                <h5 key={index} index={index} style={{ textDecorationLine: this.state.isComplete ? 'line-through' : "" }}>{item}
                <br />
                <Button className="mx-2 mt-2" variant="danger" onClick={() => this.clickDelete(index)}>Delete</Button>
                <Button className="mx-2 mt-2" variant="info" onClick={() => this.clickEdit(index)}>Edit</Button>
                <Button className="mx-2 mt-2" variant="secondary" onClick={() => this.clickComplete(index)}>Complete</Button></h5>
            ))}
        </div>
        </Jumbotron>
        </Container>
    )
  }
}

export default Todo;