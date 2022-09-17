import TodoItem from './TodoItem.js'


function TodoList (props) {
   
      return (
        <div>
            <ul className='list--container'>
                {props.todos.map(todo=> <TodoItem key={todo.id} {...todo} clearList={props.clearList} removeTodo={props.removeTodo} checkTodo={props.checkTodo}/>)}
            </ul>
        </div>
     );
    
}

export default TodoList;