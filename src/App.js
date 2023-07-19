import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;
