

export default function Counter(props){
    const countTotal = props.todos.length
    const completedTasks = props.todos.filter((todo)=>todo.isComplete === true);
    return (
    <div className="todo-stats">
        <div className="total-tasks">
          Total Tasks: <span>{countTotal}</span>
        </div>
        <div className="completed-tasks">
          Completed Tasks: <span>{completedTasks.length}</span>
        </div>
        <div className="remaining-tasks">
          Remaining Tasks: <span>{countTotal - completedTasks.length}</span>
        </div>
      </div>
    )
}