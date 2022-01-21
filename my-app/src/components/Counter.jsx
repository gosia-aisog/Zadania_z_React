import { useState } from "react";
const Counter = ({ initialCounter }) => {
  const [count, setCount] = useState(initialCounter);

  const increment = () => setCount((state) => state + 10);
  const decrement = () => setCount((state) => state - 10);

  return (
    <div>
      <button onClick={increment}> +10 </button>
      <p> {count}</p>
      <button onClick={decrement}> -10</button>
    </div>
  );
};

export default Counter;
