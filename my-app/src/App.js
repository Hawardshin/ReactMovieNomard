import Button from "./Button";
import styles from "./App.module.css"
function App() {
  const [todo,setTodo] = useState("");
  return (

    <div>
      <input type="text" placeholder="Write your to do...."/>
    </div>
  );
}

export default App;
