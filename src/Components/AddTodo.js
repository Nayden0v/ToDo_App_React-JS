import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:"",
        };
    }
    render() {
        return (
            <div className="input--container">
                <input type="text" autoFocus placeholder="Enter your todo..." onChange={(e)=>{this.setState({value:e.target.value})}}/>
                <button className="btn--add" onClick={()=>this.props.addTodo(this.state.value)}>Add todo</button>
            </div>
            
        );
    }
}

export default AddTodo;