export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('action.type = ABC is not supported');
  
    default:
      return initialState;
  }
}

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
//   {
//     id: new Date().getTime() + 100,
//     desc: "Aprender Mongo",
//     done: false,
//   },
// ]