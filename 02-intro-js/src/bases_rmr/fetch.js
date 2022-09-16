const peticion = fetch(
  "https://random-word-api.herokuapp.com/word?number=10&lang=en&length=5"
);

// peticion.then((resp) => {
//   resp.json().then((data) => {
//     console.log(data);
//   });
// });

peticion
  .then(resp => resp.json()
  .then(data => { console.log(data) })
  .catch(err => console.log(err))
);
