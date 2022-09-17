import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import SwitchTheme from './Components/Theme';
import TodoList from './Components/TodoList';
import Counter from './Components/TodosCounter';
import { useState, useEffect } from 'react';

function App(props)  {

    const [todos, setTodos] = useState([])
    // let url = 'http://localhost:5000/todos';

    // const fetchTodos = ()=>{
	// 	fetch(url)
	// 		.then(r=>{
	// 			if(r.ok){
	// 				return r.json()
	// 			}
	// 		})
	// 		.then(data=> {
	// 			setTodos(data)
	// 		})
	// 		.catch( err=>console.warn(err) );
	// }

  const addTodo=(title)=>{
        let todoItem = {
            id:new Date().getTime().toString(),
            title: title,
            isComplete: false,
        }
        // fetch(url, {
        //     method:"Post",
        //     body:JSON.stringify(todoItem),
        //     headers:{
        //         "content-type":"application/json"
        //     }
        // })
        // .then(res=>{
        //     if(res.ok){
        //         return res.json()
        //     }
        // })
        // .then(todo=>{
        //     setTodos(...todos,todo)
        // })
        
        setTodos([...todos,todoItem])
    }

   const removeTodo=(todoid)=>{
        let todosRemove = todos.filter(todo=>todo.id !== todoid);

        setTodos([...todosRemove])
    }

   const checkTodo=(todoid)=>{
        let todosCheck = todos.map(todo=>todo.id === todoid ? {...todo, isComplete:!todo.isComplete} : todo)

        setTodos([...todosCheck])

    }

   const clearTodoList=()=>{
        setTodos([])
    }

    useEffect(()=>{
        getLS()
    },[]);

    useEffect(()=>{
        saveToLS()
    },[todos]);



   const saveToLS=()=>{
         localStorage.setItem('todos', JSON.stringify(todos))
        }
    

   const getLS=()=>{
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos',  JSON.stringify([]))
        }else{
          let todoLocal = JSON.parse(localStorage.getItem('todos'))
          setTodos(todoLocal)
        }
    }

    // useEffect(fetchTodos,[])
   

    return (
        <div>
            <SwitchTheme />
            <Header /> 
            <AddTodo addTodo={addTodo} items={todos} clearList={clearTodoList}/>
            <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo}/>
            <Counter todos={todos}/>
        </div>
    );
}

export default App;