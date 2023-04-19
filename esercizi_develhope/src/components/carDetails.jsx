import React, { useRef } from "react";

const CarDetails = (props) => {
const model = useRef()
const year = useRef()
const color = useRef()

function hendelClick (e){
    e.preventDefault(); 
    console.log(model.current.value, year.current.value, color.current.value)
}


return(
    <>
        <form>
            <div>
            <input type= "text" defaultValue={props.InitialData.model} ref={model} autoFocus= "true" /><br/>
            <input type= "text" defaultValue={props.InitialData.year} ref={year} /><br/>
            <input type= "text" defaultValue={props.InitialData.color} ref={color} />
            </div>
            <button onClick={hendelClick}>Submit</button>
            <button onClick={() =>{ model.current.value = ""; year.current.value = ""; color.current.value = ""; model.current.focus()}}>Reset</button>
        </form>
    </>
)

}

export default CarDetails