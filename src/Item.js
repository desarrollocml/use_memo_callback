import React, { useEffect } from 'react'

export default function Item({user}) {

    useEffect(() => {
        console.log("Item render")
       
    }, )
  

    return (
        <li>
            {user.name}
        </li>
    )
}
