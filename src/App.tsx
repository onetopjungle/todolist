import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/TodoList'
import {TypeTodo} from './Components/TypeTodo';




function App() {


const [todoList, setTodos] = useState<TypeTodo[]>([
 {title:"Upload 1099-R to TurboTax",subTitle: "Finance", isComplete:false},
 {title:"Submit 2019 tax return", subTitle: "Finance",isComplete:false},
 {title:"Print parking passes", subTitle: "Wedding",isComplete:false},
 {title:"Sign contact, send back",subTitle: "Freelance", isComplete:false},
 {title:"Hand sanitizer", subTitle: "Shopping List",isComplete:false},
]);
  const onSubmit = (param: any) => {
    if (param.title == "" || param.subTitle  == "") {
            alert('Data: error')
      return param
    }
        setTodos([...todoList, param])
  }
return (
  <div className="todo"> 
      <Todo todos= {todoList} onChangeTodo = {setTodos} onSubmit={onSubmit} />
    </div>
  );
}
export default App;


// const handleChangeTodo = (index: number) => {

// }