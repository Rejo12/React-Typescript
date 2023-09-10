import React, { useState } from 'react';
import './index.css';
import InputField from './components/InputField';
import { ToDo } from './model';
import TodoList from './components/TodoList';

const App:React.FC=()=> {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<ToDo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todos){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }
  }

  return (
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
