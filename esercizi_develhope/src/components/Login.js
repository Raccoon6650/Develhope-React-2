import React, { useEffect, useRef } from "react";

const Login = (props) => {
const email = useRef()
const pass = useRef()
const em2 = email.current.value.length 
const pass2 = pass.current.value.length

/*useEffect(() => {
    const em2 = email.current.value.length 
    const pass2 = pass.current.value.length 
    const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
    return disabled
}, [em2, pass2])*/





    return (
        <>
        <div>
        <input type= "email" placeholder="email" ref={email}/>
        </div>
        <input type= "password" placeholder="password" ref={pass}/>
                    {/*function isDisabled (){
                    const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
                    return disabled}*/}
                                {/*<button disabled = {async function () {
                                await (em2, pass2)
                                const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
                                return disabled}}>Submit</button>*/}
        <button disabled = {}>Submit</button>
        <button onClick={() =>{email.current.value = ""; pass.current.value = ""}}>Reset</button>
        </>
    )}

    /*Login.defaultProps = {
        disabled: {isDisabled(){
            const em2 = email.current.value.length
            const pass2 = pass.current.value.length
            const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
            return disabled}}
    }*/

    export default Login