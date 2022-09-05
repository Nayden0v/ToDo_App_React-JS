import TodoList from './TodoItem.js'

export default function Counter(){
    const count = TodoList.length
    return (
    <div class="todo-stats">
        <div class="total-tasks">
          Total Tasks: <span>{count}</span>
        </div>
        <div class="completed-tasks">
          Completed Tasks: <span>0</span>
        </div>
        <div class="remaining-tasks">
          Remaining Tasks: <span>0</span>
        </div>
      </div>
    )
}