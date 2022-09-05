import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import SwitchTheme from './Components/Theme';
import TodoList from './Components/TodoList';
import Counter from './Components/TodosCounter';
import TodoItem from './Components/TodoItem';

export default function App(){
    const todoLi = TodoItem.map(item=><TodoList 
    key = {item.id}
    {...item}
    />)

    return (
        <div>
           <SwitchTheme />
           <Header /> 
           <AddTodo />
           {todoLi}
           <Counter />
        </div>
    )
}