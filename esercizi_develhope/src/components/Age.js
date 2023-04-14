import React from "react";

const Age = (props) => {

    return(
        <>
        { props.age > 18 ? <p>Your age is {props.age}</p> : <p>You are very young!</p>}
        </>
    );

}




export default Age;