import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Su nombre"
      />

      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Set focus
      </button>
    </>
  );
};
