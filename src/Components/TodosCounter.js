// import TodoList from './TodoItem.js'

export default function Counter(props){
    const countTotal = props.count.length
    return (
    <div className="todo-stats">
        <div className="total-tasks">
          Total Tasks: <span>{countTotal}</span>
        </div>
        <div className="completed-tasks">
          Completed Tasks: <span>0</span>
        </div>
        <div className="remaining-tasks">
          Remaining Tasks: <span>0</span>
        </div>
      </div>
    )
}