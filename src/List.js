import React, { useEffect, memo } from "react";
import Item from "./Item";

 const List = memo(({ users }) =>{

  useEffect(() => {
      console.log("List render")
      
  }, )

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key ={user.id} user={user}></Item>
        ))}
      </ul>
    </div>
  );
})
export default List;