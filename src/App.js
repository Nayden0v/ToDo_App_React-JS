import './App.css';
import React, { Component } from 'react'
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import SwitchTheme from './Components/Theme';
import TodoList from './Components/TodoList';
import Counter from './Components/TodosCounter';
import TodoItem from './Components/TodoItem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
         };
    }

    addTodo=(title)=>{
        let newTodo = {
            id:new Date().getTime().toString(),
            title: title,
            completed: false,
        }
        
        this.setState({
            todos:[...this.state.todos,newTodo]
        })

    }

    removeTodo=(todoid)=>{
        let toDos = this.state.todos.filter(todo=>todo.id !== todoid);
        this.setState({
            todos:[...toDos]
        })

        console.log(this.state.todos);
        console.log(toDos);
    }

    render() {
        return (
            <div>
                <SwitchTheme />
                <Header /> 
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
                <Counter count={this.state.todos}/>
            </div>
        );
    }
}

export default App;