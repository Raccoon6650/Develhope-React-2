import React, { useEffect, useState } from "react";

const GitHubUser = (props) => {

    const [user, newUser] = useState(props.uName)
    async function getName (){
        const userName = await fetch(`https://api.github.com/users/${props.user}`)
        return await userName.json()
    }

    useEffect(()=>{
        getName().then((user) => {newUser(user)})
    },[])
    return(
        <div>
            <p>{user.name}</p>
        </div>
    )
}

export default GitHubUser