import React, {useRef} from "react";

const Login = (props) => {
  const email = useRef();
  const pass = useRef();
  const button = useRef();

  /*useEffect(() => {
    setIsDisabled(email.current.value.length === 0 || pass.current.value.length === 0);
  }, [email.current.value, pass.current.value]);


    const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const em2 = email.current.value.length;
    const pass2 = pass.current.value.length;
    setIsDisabled(!(em2 !== "" && pass2 !== ""));
  }, [email, pass]);*/

  function isDisabled (){
    const em2 = email.current.value.length
    const pass2 = pass.current.value.length
    const disabled = !(em2 !== 0 && pass2 !== 0) ? true : false 
    button.current.disabled = disabled
    console.log (disabled)}


    return (
        <>
        <div>
        <input type= "email" placeholder="email" ref={email} onChange={isDisabled}/>
        </div>
        <input type= "password" placeholder="password" ref={pass} onChange={isDisabled}/>
                    {/*function isDisabled (){
                    const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
                    return disabled}*/}
                                {/*<button disabled = {async function () {
                                await (em2, pass2)
                                const disabled = !(em2 !== "" && pass2 !== "" ) ? true : false 
                                return disabled}}>Submit</button>*/}
        <button ref={button} disabled = "true">Submit</button>
        <button onClick={() =>{email.current.value = ""; pass.current.value = ""; button.current.disabled = "true"}}>Reset</button>
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