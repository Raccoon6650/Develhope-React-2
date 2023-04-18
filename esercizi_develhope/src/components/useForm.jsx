import { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    reset,
    submit,
  };
};

export default useForm;