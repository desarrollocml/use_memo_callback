import React from "react";
import Item from "./Item";

export default function List({ users }) {
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
