import './App.css';
import React, { Component } from 'react'
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import SwitchTheme from './Components/Theme';
import TodoList from './Components/TodoList';
import Counter from './Components/TodosCounter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
         };
    }

    addTodo=(title)=>{
        let todoItem = {
            id:new Date().getTime().toString(),
            title: title,
            isComplete: false,
        }
        
        this.setState({
            todos:[...this.state.todos,todoItem]
        })



    }

    removeTodo=(todoid)=>{
        let todosRemove = this.state.todos.filter(todo=>todo.id !== todoid);

        this.setState({
            todos:[...todosRemove]
        })
    }

    checkTodo=(todoid)=>{
        let todosCheck = this.state.todos.map(todo=>todo.id === todoid ? {...todo, isComplete:!todo.isComplete} : todo)

        this.setState({todos:[...todosCheck]})


        console.log(this.state.todos);
    }

    clearTodoList=()=>{
        this.setState({todos:[]})
    }

    componentDidMount(){
        this.getLS();
    }

    componentDidUpdate(){
        this.saveToLS();
    }


    saveToLS=()=>{
         localStorage.setItem('todos', JSON.stringify(this.state.todos))
        }
    

    getLS=()=>{
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos',  JSON.stringify([]))
        }else{
          let todoLocal = JSON.parse(localStorage.getItem('todos'))
          this.setState({todos:todoLocal})
        }
    }
   

    render() {
        return (
            <div>
                <SwitchTheme />
                <Header /> 
                <AddTodo addTodo={this.addTodo} items={this.state.todos} clearList={this.clearTodoList}/>
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo} checkTodo={this.checkTodo}/>
                <Counter todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;