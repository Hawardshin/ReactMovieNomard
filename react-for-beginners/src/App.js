// import Button from "./Button";
// import styles from "./App.module.css"
import { useState, useEffect } from 'react';

function Hello(){
  useEffect(()=>{
    console.log('created :)');
    return ()=> console.log("destory :(");
  },[]);
  return <h1>Hello</h1>;
}

function App() {
<<<<<<< HEAD
  const [showing, setShowing] = useState(false);
  const onClick = ()=>setShowing((prev)=>!prev);
=======
  const [todo,setTodo] = useState("");
>>>>>>> 9999f595ca32e3eceaadec2be3f6b1bdc41f99c0
  return (

    <div>
<<<<<<< HEAD
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
=======
      <input type="text" placeholder="Write your to do...."/>
>>>>>>> 9999f595ca32e3eceaadec2be3f6b1bdc41f99c0
    </div>
  );
}

export default App;
