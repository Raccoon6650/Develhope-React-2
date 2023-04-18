import React, { useEffect, useState } from "react";

const GitHubUser = (props) => {

    const [user, newUser] = useState({name: "Loading"})
    async function getName (){
        const userName = await fetch(`https://api.github.com/users/${props.user}`)
        return await userName.json()
    }

    useEffect(()=>{;
        getName().then((user) => {newUser(user)})
    },[])
    return(
        <div>
            Name User: {user.name} <br/>
            ID: {user.id} <br/>
            Url Avatar: {user.avatar_url}
        </div>
    )
}

export default GitHubUser