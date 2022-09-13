import React, { Component } from 'react'
import TodoList from './TodoList';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key:this.props.id,
            title:this.props.title
        };
    }

    render() {
        return (
            <div className='todo'> 
                <li key={this.state.key}><span>{this.state.title}</span></li>
                <button onClick={()=>{this.props.removeTodo(this.state.key)}} className='remove--todo'>X</button>
                <button className='check--todo'>&#10004;</button>
            </div>
        );
    }
}

export default TodoItem;