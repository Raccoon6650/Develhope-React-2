import React, { useContext } from "react";
import LenguageContext from "../LenguageContext";



    const DisplayContext = () => {

        const test = useContext(LenguageContext)
        console.log(test)
        return(
        <select>
      {test.Lingua.map((el) => (
        <option value={el}>
          {el}
        </option>
      ))}
        </select>
    )}

  

export default DisplayContext