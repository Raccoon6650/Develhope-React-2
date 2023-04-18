import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count => count + 1);
  }

  function decrement() {
    setCount(count => count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return [count, increment, decrement, reset];
}

export default useCounter