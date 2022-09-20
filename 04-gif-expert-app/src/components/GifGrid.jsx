export const GifGrid = ({ category }) => {

  const gifs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h3>{ category }</h3>
      {
        gifs.map( gif => (
          <li key={gif}>{ gif }</li>
        ))
      }
    </>
  )
}
