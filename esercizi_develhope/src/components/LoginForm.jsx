import React from "react";
import useForm from "./useForm";

const LoginForm = () => {
  const { email, password, handleEmailChange, handlePasswordChange, reset, submit} =useForm();



  return (
    <form>
      <div>
        <input type="email" value={email} id="email" placeholder="Email" onChange={handleEmailChange}/>
      </div>
      <div>
        <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange}/>
      </div>
      <button type="submit" onClick={submit} disabled={!(email && password)}>Submit</button>
      <button onClick={reset}>Reset</button>
    </form>
  );
};

export default LoginForm;