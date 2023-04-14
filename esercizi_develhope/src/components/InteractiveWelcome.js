import React, {useState} from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
const [name, setName] = useState("")

    return(
        <>
        <input type="text" className="name" onChange={(e) => setName(e.target.value)}/>
        
        <Welcome name={name}/>
        </>
    )
}

export default InteractiveWelcome