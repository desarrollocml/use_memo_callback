import React, { useEffect } from "react";
import Item from "./Item";

export default function List({ users }) {

  useEffect(() => {
      console.log("List render")
      /* return () => {
          cleanup
      } */
  }, /* [input] */)

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key ={user.id} user={user}></Item>
        ))}
      </ul>
    </div>
  );
}
