import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <>
        <div>
        <input type= "email" placeholder="email" onChange={(email) => setEmail(email.target.value)} value={email}/>
        </div>
        <input type= "password" placeholder="password" onChange={(pass) => setPass(pass.target.value)} value={pass}/>
        <button disabled= {!(email.length !== 0 && pass.length !== 0) ? true : false}>Submit</button>
        <button onClick={() =>{ setEmail(""); setPass("")}}>Reset</button>
        </>
    )}

    export default Login