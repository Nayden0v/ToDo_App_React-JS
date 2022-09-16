import TodoItem from './TodoItem.js'
import React, { Component } from 'react'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {
        return (
        <div>
            <ul className='list--container'>
                {this.props.todos.map(todo=> <TodoItem key={todo.id} {...todo} clearList={this.props.clearList} removeTodo={this.props.removeTodo} checkTodo={this.props.checkTodo}/>)}
            </ul>
        </div>
        );
    }
}

export default TodoList;