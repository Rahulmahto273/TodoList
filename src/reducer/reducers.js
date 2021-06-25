
const initialData ={
  list: []
}
const reducers = (state=initialData, action)=>{
  switch (action.type) {
    case "ADD":
    const {id, data} = action.payload;
      return{
        ...state,
        list:
          [
            ...state.list,
            {
            id: id,
            data: data,
          }
          ]
        }

      break;
      case "DELETE":
      const newlist=state.list.filter((elem)=>elem.id!==action.id)
        return{
          ...state,
          list: newlist
          }

        break;
        case "REMOVE":

          return{
            ...state,
            list: []
          }


          break;
    default:
     return state;

  }
}

export default reducers;
