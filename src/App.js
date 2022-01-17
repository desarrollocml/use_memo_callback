import { useState,useEffect } from "react";
import List from "./List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];
function App() {
  
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("Nuevo")

const handleAdd= ()=>{
  const newUser = {id:Date.now(), name:text}
  setUsers([...users,newUser])
}

  useEffect(() => {
    console.log("App render")

  },)

  return (
    <div>
      <input
        type= "text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      ></input>
      <button onClick={handleAdd}>
        Add
      </button>
      <List users={users}></List>
    </div>
  );
}

export default App;
