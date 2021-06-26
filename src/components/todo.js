import React,{useState} from "react";
import "./todo.css";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, removeTodo} from "../actions/index.js";

function Todo(){
  const [inputData,setData] = useState('');
  const list= useSelector((state)=>state.reducers.list);
  const dispatch = useDispatch();
  return(
    <>
      <div className="container">
      <div className="wrapper">
        <div className="inner">
          <h1>TO DO LIST</h1>
          <input className="input" type= "text" placeholder="add_items" value= {inputData}  onChange={(event)=>setData(event.target.value)} />
          <button><i className="fa fa-plus" onClick={()=>dispatch(addTodo(inputData),setData(""))} ></i></button>
        </div>
        <div className="show">
          {
            list.map((elem)=>{
              return(
              <div className="eachitem" key={elem.id}>
                <h4>{elem.data}</h4>
                <button><i class="fas fa-trash-alt" onClick={()=>dispatch(deleteTodo(elem.id))}></i></button>
                <hr />
              </div>
            )})
          }
        </div>
      <div className="centre">
        <h1><button type="button" onClick={()=>dispatch(removeTodo())}>REMOVE ALL</button></h1>
      </div>
      </div>
      </div>
    </>

  )
};
export default Todo;
