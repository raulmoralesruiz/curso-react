import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
  
  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log({ data, loading, error });

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr/>
      
    </>
  )
}
