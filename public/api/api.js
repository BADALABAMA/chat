export function createGif() {
  const apiKey = 'SYcbsZO5ac1UbWIwRfyfzO9w3CbHTkat';
  const userChoise = prompt(
    'Enter gif what you wanna send. Click at gif to remove '
  );
  const searchingGif = userChoise;
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchingGif}}&api_key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gifData = data.data;

      const randomIndex = Math.floor(Math.random() * gifData.length);
      const randomGif = gifData[randomIndex];

      const gifUrl = randomGif.images.original.url;

      const imgElement = document.createElement('img');
      imgElement.src = gifUrl;
      imgElement.classList.add('gif-img');

      imgElement.addEventListener('click', (e) => {
        e.preventDefault();
        imgElement.remove();
      });
      const containerElement = document.getElementById('screen');
      containerElement.appendChild(imgElement);
    })
    .catch((error) => {
      console.error('Ошибка при получении данных из Giphy API:', error);
    });
}
