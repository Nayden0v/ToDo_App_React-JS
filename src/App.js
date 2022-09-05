import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import SwitchTheme from './Components/Theme';
import TodoList from './Components/TodoList';
import Counter from './Components/TodosCounter';

export default function App(){
    return (
        <div>
           <SwitchTheme />
           <Header /> 
           <AddTodo />
           <TodoList />
           <Counter />
        </div>
    )
}