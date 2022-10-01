import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "raul22",
    email: "raul@gmail.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("hola!");
  }, []);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
    </>
  );
};
