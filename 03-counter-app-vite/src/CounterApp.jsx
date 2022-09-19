import { useState } from "react";
import PropTypes from "prop-types";

// const click = (event) => {
//   console.log(event);
// };

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);
  
  const clickSum = () => {
    setCounter(counter + 1);
  };
  const clickSub = () => setCounter(counter - 1);
  const clickReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={clickSum}>+1</button>
      <button onClick={clickSub}>-1</button>
      <button aria-label="btn-reset" onClick={clickReset}> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
