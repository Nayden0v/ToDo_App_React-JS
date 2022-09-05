// import TodoItem from './TodoItem.js'

export default function TodoList(props){
    return (
        <div>
            <ul className='list--container'>
                <li>{props.title} <button className='remove--todo'>🗑</button></li>
            </ul>
        </div>
    )
}