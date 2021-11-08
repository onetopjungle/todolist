import { argv0 } from 'process';
import React from 'react';
import { useState } from 'react';
import HeaderApp from './HeaderApp';
import Modal from './Modal';



const Todo = ({todos, onChangeTodo , onSubmit}: any) => {

  const date = new Date();
  const [showModal, setShowModal] = useState(false);
// const [a,setA]=useState('');
// const [b,setB]=useState('');

const checkOn = todos.filter((item: any) => {
  return item.isComplete === false
});
const checkOff = todos.filter((item: any) => {
  return item.isComplete === true
});

  return (
    <div className="Wrapper">
    <HeaderApp checkOn={checkOn} 
               checkOff={checkOff}/>
      <div className="incomplete">
        <h1>Incomplete</h1>
        {checkOn.map((item:any, index: number)=>{
          return  <div className="content">
         <div className="iput">
         <input type="checkbox" id="oke" onClick={()=> onChangeTodo([...todos, (item.isComplete = true)])} checked={false}
          />
         </div>
         <div className="contentTitle">
         <label htmlFor="oke">{item.title}</label>
          <p className= "subTitle">{item.subTitle}</p>
         </div>
        </div>
        })}
       </div>
      <div className="complete">
      <h1>Complete</h1>
      {checkOff.map((item:any, index: any)=>{
          return  <div className="content">
          <input type="checkbox" id="oke2" onClick={()=> onChangeTodo ([...todos, (item.isComplete = false)])} defaultChecked/>
          <label htmlFor="oke2">{item.title}</label>
        </div>
        })}
       </div>
      <button className="openModel" onClick={() => {
        setShowModal(!showModal);
        
      }}><i className="fas fa-plus"></i></button>
      {showModal && <Modal onSubmit={onSubmit} handleClose={(argv0) => setShowModal(argv0)} />}
    
    </div>
  )
}

export default Todo
