import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:"",
        };

        this.addItem = this.addItem.bind(this);

    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            this.props.addTodo(this.state.value)
            this._inputElement.value="";
            this.setState({value:""});
            this._inputElement.focus();
        };

        e.preventDefault();

    }

    render() {


        return (
            <form className="input--container">
                <input name="name" ref={(a) => this._inputElement = a} autoFocus type="text" placeholder="Enter your todo..." onChange={(e)=>{this.setState({value:e.target.value})}}/>
                {!this.state.value?null:<button type='submit' className="btn--add" onClick={this.addItem}>Add todo</button>}
                {this.props.items.length===0?null:<button className="btn--clear" onClick={()=>this.props.clearList()}>Clear</button>}
            </form>
            
        );
    }
}

export default AddTodo;