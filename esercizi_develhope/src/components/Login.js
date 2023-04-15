import React, { useState } from "react";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <>
        <div>
        <input type= "email" placeholder="email" onChange={(email) => setEmail(email.target.value)}/>
        </div>
        <input type= "password" placeholder="password" onChange={(pass) => setPass(pass.target.value)}/>
        <button disabled= {!(email.length !== 0 && pass.length !== 0) ? true : false}>Submit</button>
        </>
    )}

    export default Login