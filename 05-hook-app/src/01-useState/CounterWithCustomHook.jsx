import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(22);

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-outline-success" onClick={() => increment(10)}>
        +1
      </button>

      <button className="btn btn-outline-warning" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-outline-danger" onClick={() => decrement(10)}>
        -1
      </button>
    </>
  );
};
