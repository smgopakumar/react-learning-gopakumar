import { useState } from "react";

export default function Counter() {
  // 1) state
  const [count, setCount] = useState(0);

  // 2) handlers
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "12px",
        width: "260px",
        textAlign: "center",
        margin: "16px auto",
      }}
    >
      <h2>Count: {count}</h2>

      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button type="button" onClick={increase}>
          Increase
        </button>
        <button type="button" onClick={decrease}>
          Decrease
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
