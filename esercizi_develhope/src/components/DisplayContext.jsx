import React, { useContext } from "react";
import { LenguageContext } from "../App";



    const DisplayContext = () => {

        const test = useContext(LenguageContext)
        return(
        <LenguageContext>
      {['Lingua1', 'Lingua2', 'Lingua3'].map((el) => (
        <select value={el}>
          {el}
        </select>
      ))}
        </LenguageContext>
    )}


export default DisplayContext