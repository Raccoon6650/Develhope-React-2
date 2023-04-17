import React, { useEffect, useRef, useState } from "react";

const Login = (props) => {
  //const [isDisabled, setIsDisabled] = useState(true);
  const email = useRef();
  const pass = useRef();

  /*useEffect(() => {
    setIsDisabled(email.current.value.length === 0 || pass.current.value.length === 0);
  }, [email.current.value, pass.current.value]);


    const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const em2 = email.current.value.length;
    const pass2 = pass.current.value.length;
    setIsDisabled(!(em2 !== "" && pass2 !== ""));
  }, [email, pass]);*/




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
        <button disabled = { email===0 && pass ===0 ? true : false }>Submit</button>
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