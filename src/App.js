import { useState, useEffect, useMemo,useCallback } from "react";
import List from "./List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];
function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleDelete= useCallback(
     (userId) => {
        setUsers(users.filter((user) => user.id !== userId));
      },[users])

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        //console.log("filter process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  useEffect(() => {
    console.log("App render");
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete}></List>
    </div>
  );
}

export default App;
