import React from 'react';
//import GitHubUserForHook from './components/GitHubUserForHook';
import CarDetails from './components/carDetails';

function App() {
    return(
    <CarDetails InitialData= {{model: 'Nissan - Micra', year: 2005, color: 'Blue' }}/>
    )
}

export default App;