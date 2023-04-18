import React from 'react';
import Counter from './components/CounterClick';

function App() {

  function onCounterChange (count) {
    console.log(count)
  }
  return (
    <Counter onCounterChange={onCounterChange}/>
  );
}

export default App;