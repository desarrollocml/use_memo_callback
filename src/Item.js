import React, { useEffect } from 'react'

export default function Item({user}) {

    useEffect(() => {
        console.log("Item render")
        /* return () => {
            cleanup
        } */
    }, /* [input] */)
  

    return (
        <li>
            {user.name}
        </li>
    )
}
