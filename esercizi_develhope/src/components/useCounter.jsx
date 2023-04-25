import { useCallback, useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

const increment = useCallback(function increment() {
  setCount(count => count + 1);
},[])
const decrement = useCallback(function decrement() {
    setCount(count => count - 1);
  },[])
const reset = useCallback(function reset() {
  setCount(initialValue);
},[])

  return [count, increment, decrement, reset];
}

export default useCounter