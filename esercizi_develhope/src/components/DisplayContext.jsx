import React, { useContext } from "react";
import LenguageContext from "../LenguageContext";



    const DisplayContext = () => {
        
        const test = useContext(LenguageContext)
        return(
          <>
        <select onChange={(e) => test.newLeng(e.target.value)}>
      {test.Lingua.map((el) => (
        <option value={el}>
          {el}
        </option>
      ))}
        </select>
        </>
    )}

  

export default DisplayContext