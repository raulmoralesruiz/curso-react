import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // se monta el componente
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // se desmonta el componente
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>El usuario ya existe</h3>
      {/* { JSON.stringify(coords)} */}

      <div className="d-flex">
        <div>
          <span className="badge bg-info">x: {coords.x}</span>
        </div>
        <div>
          <span className="badge bg-primary">y: {coords.y}</span>
        </div>
      </div>
    </>
  );
};
