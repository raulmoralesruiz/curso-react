const getWords = async () => {
  try {
    const url =
      "https://random-word-api.herokuapp.com/word?number=10&lang=en&length=5";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getWords();