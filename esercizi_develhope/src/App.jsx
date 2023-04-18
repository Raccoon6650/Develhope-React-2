import React from 'react';
import DisplayContext from './components/DisplayContext'; 

//import CounterClick from './components/CounterClick';

//export const LenguageContext = React.createContext();

import LenguageContext from "./LenguageContext"

function App() {
  return (
        <LenguageContext.Provider value={{Lingua : ['Lingua1', 'Lingua2', 'Lingua3']}}>
          <DisplayContext/>
        </LenguageContext.Provider>
  );
}

export default App;