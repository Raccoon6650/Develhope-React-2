import React, { useState } from 'react';
import DisplayContext from './components/DisplayContext'; 

//import CounterClick from './components/CounterClick';

//export const LenguageContext = React.createContext();

import LenguageContext from "./LenguageContext"

function App() {

  const [leng, newLeng] = useState("")
  
  return (
        <LenguageContext.Provider 
          value={{Lingua : ['Lingua1', 'Lingua2', 'Lingua3'],
          leng: leng,
          newLeng: newLeng
          }}>
          <DisplayContext/>
          <h1>{leng}</h1>
          
        </LenguageContext.Provider>
  );
}

export default App;