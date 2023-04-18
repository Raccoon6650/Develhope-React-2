import React, { useState } from 'react';
import CounterClick from './components/CounterClick';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  function collateral () {
    return (
    <>
    { count }
    </>
  )}
  
  return (
    <CounterClick onCounterChange={collateral} count = {count} increment ={increment} decrement ={decrement} reset = {reset}/>
  );
}

export default App;