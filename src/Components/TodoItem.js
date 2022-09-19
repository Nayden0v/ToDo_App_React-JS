
function TodoItem (props) {

        return (
            <div className='todo'> 
                <li className={!props.isComplete?null:"completed"}><span>{props.title}</span></li>
                <button onClick={()=>{props.removeTodo(props.id)}} className='remove--todo'>X</button>
                <button onClick={()=>{props.updateTodo(props.id)}} className='check--todo'>&#10004;</button>
            </div>
        );
    
}

export default TodoItem;