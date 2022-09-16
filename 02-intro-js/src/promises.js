const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola Mundo");
  }, 2000);
});

promesa.then((mensaje) =>
  console.log(mensaje).catch((err) => console.warn(err))
);
