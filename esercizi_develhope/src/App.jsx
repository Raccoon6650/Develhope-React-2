import React from 'react';
import DisplayContext from './components/DisplayContext'; 

//import CounterClick from './components/CounterClick';

export const LenguageContext = React.createContext();

function App() {
  return (
        <LenguageContext.Provider>
          <DisplayContext/>
        </LenguageContext.Provider>
  );
}

export default App;