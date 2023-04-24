import React, { useRef } from "react";

const CarDetails = (props) => {
const model = useRef()
const year = useRef()
const color = useRef()
const button = useRef()

function hendelClick (e){
    e.preventDefault(); 
    console.log(model.current.value, year.current.value, color.current.value)
    model.current.value= props.InitialData.model;
    year.current.value = props.InitialData.year;
    color.current.value = props.InitialData.color;
}


return(
    <>
        <form>
            <div>
            <input type= "text" defaultValue={props.InitialData.model} ref={model} autoFocus /><br/>
            <input type= "text" defaultValue={props.InitialData.year} ref={year} /><br/>
            <input type= "text" defaultValue={props.InitialData.color} ref={color} />
            </div>
            <button ref={button} onClick={hendelClick}>Submit</button>
            <button onClick={() =>{ model.current.value = props.InitialData.model; year.current.value = props.InitialData.year; color.current.value = props.InitialData.color; model.current.focus()}}>Reset</button>
        </form>
    </>
)

}

export default CarDetails