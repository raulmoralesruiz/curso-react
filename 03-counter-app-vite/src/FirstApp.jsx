const getMessage = (name) => `Hello ${name}!`;

const variable = {
  name: "John",
  age: 30,
  country: "USA",
};

export const FirstApp = () => {
  return (
    <>
      <h1>FirstApp</h1>
      <p>{getMessage(variable.name)}</p>
      {/* <code>{ JSON.stringify(variable) }</code> */}
      <p>algo</p>
    </>
  );
};
