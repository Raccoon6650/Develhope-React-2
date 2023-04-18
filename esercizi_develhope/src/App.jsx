import React, { useEffect, useState } from 'react';
import Counter from './components/CounterClick';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  useEffect(function change () {

    return(
      console.log({count}))
},[count])
  return (
    <Counter increment={increment} count= {count}/>
  );
}

export default App;