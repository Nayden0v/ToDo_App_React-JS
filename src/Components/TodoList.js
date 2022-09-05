import TodoList from './TodoItem.js'

export default function GetTodo(){
    const todoLi = TodoList.map(item=><li>{item.title} <button className='remove--todo'>🗑</button></li>)

    return (
        <div>
            <ul className='list--container'>
                {todoLi}
            </ul>
        </div>
    )
}