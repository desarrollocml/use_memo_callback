import React, { memo, useEffect } from "react";

const Item = memo(({ user }) => {
  useEffect(() => {
    //console.log("Item render");
  });

  return <li>{user.name}</li>;
});

export default Item;
