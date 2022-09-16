import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div className='todo'> 
                <li className={!this.props.isComplete?null:"completed"}><span>{this.props.title}</span></li>
                <button onClick={()=>{this.props.removeTodo(this.props.id)}} className='remove--todo'>X</button>
                <button onClick={()=>{this.props.checkTodo(this.props.id)}} className='check--todo'>&#10004;</button>
            </div>
        );
    }
}

export default TodoItem;