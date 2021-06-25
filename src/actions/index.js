export const addTodo = (inputData)=>{
  return{
    type: "ADD",
    payload:{
      id: Math.random(),
      data: inputData
    }
  }
};

export const deleteTodo = (id)=>{
  return{
    type: "DELETE",
    id
  }
};

export const removeTodo = ()=>{
  return{
    type: "REMOVE",
  }
};
