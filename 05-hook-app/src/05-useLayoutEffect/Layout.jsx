import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  
  // useCounter initial state is 1
  const { counter, increment } = useCounter(1);  

  const { loading, data, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  
  const { author, quote } = !!data && data[0];

  

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      { loading 
        ? <LoadingQuote /> 
        : <Quote author={author} quote={quote} />
      }

      <button
        className="btn btn-primary"
        disabled={loading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
}
