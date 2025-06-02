import { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const memoExpensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i;
    }
    return total;
  }, [])

  // const expensiveValue = (() => {
  //   let total = 0;
  //   for (let i = 0; i < 1_000_000_000; i++) {
  //     total += i;
  //   }
  //   return total;
  // })();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>Expensive value: {memoExpensiveValue}</p>
    </div>
  );
}

export default ExpensiveComponent;