import React from "react";

const Button = (props) => {
return(
    <>  
        <button onClick={props.handleClick} label={props.label}/>
    </>
)}

export default Button