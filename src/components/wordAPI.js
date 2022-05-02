export async function fetchWord() {
  let response = await fetch(
    'https://random-word-api.herokuapp.com/word?length=5'
  );
  let data = await response.json();
  console.log(data[0]);
  return data[0].toUpperCase();
}
