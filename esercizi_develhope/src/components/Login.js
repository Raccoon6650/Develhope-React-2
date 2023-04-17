import React, {useRef} from "react";

const Login = (props) => {
  const email = useRef();
  const pass = useRef();
  const button = useRef();

  function isDisabled (){
    const em2 = email.current.value.length
    const pass2 = pass.current.value.length
    const disabled = !(em2 !== 0 && pass2 !== 0) ? true : false 
    button.current.disabled = disabled
    console.log (disabled)}


    return (
        <>
        <div>
        <input type= "email" placeholder="email" ref={email} onChange={isDisabled} autoFocus= "true" />
        </div>
        <input type= "password" placeholder="password" ref={pass} onChange={isDisabled}/>
        <button ref={button} disabled = "true">Submit</button>
        <button onClick={() =>{email.current.value = ""; pass.current.value = ""; button.current.disabled = "true"}}>Reset</button>
        </>
    )}

    export default Login