import { useState } from "react";
import PropTypes from "prop-types";

// const click = (event) => {
//   console.log(event);
// };

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);
  
  const click = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={click}> +1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
