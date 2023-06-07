import {useState, useEffect} from "react";
function App() {
  const [todo,setTodo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (event)=>setTodo(event.target.value);
  // console.log(todo);
  const onSubmit = (event)=> {
    event.preventDefault(); //랜더링이 다시 되는 것을 방지.
    if (todo == "")
      return;
          setToDos(currentArray=>[todo,...currentArray]);
      setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange = {onChange}
          value = {todo}
          type="text"
          placeholder="Write your to do...."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((itm,index)=> <li key={index}>{itm}</li>)}
      </ul>
    </div>
  );
}

export default App;
