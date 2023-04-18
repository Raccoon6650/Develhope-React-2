import React, { useState } from "react";
import GitHubUser from "./GitHubUser";


const GHUList = () => {
    
    const [usersArray, newUsersArray] = useState([])
    const [user, newUser] = useState ()


    return(
        <>
            <input type="text" placeholder="Insert User Name" value={user} onChange={ (e) => newUser(e.target.value)} />
            <button onClick= {() => newUsersArray([...usersArray,user])}>Add</button>
            {usersArray.map( (el) => {console.log(el); return <GitHubUser  user = {el}/>})}
        </>
    )
}

export default GHUList