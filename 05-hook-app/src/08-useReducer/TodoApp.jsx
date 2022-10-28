import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    desc: "Aprender Mongo",
    done: false,
  },
]


export const TodoApp = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </>
  )
}
