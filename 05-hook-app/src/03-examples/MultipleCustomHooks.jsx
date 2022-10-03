import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
  
  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary">
        Next quote
      </button>

    </>
  );
}
