// NYj49ioSXQlrOsvKIgFm53Nr2ECQOEBN
export const getGifts = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=NYj49ioSXQlrOsvKIgFm53Nr2ECQOEBN&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};