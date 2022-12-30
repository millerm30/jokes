const generateBtn = document.querySelector(".jokesButton");
const jokeElement = document.querySelector(".joke");
const emojiElement = document.querySelector(".emojiBox");
const randomJokeUrl ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart";
const imageUrls = [
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
  "images/11.png",
  "images/12.png",
  "images/13.png",
];

generateBtn.onclick = regenerate;
async function regenerate() {
  const randomEmoji = imageUrls[Math.floor((imageUrls.length - 1) * Math.random())];
  const text = await fetch(randomJokeUrl)
  const { error, setup, delivery } = await text.json();
  if (error) return alert("an unexpected error occurred");
  jokeElement.innerHTML = 
  ` 
    <div class="question">${setup}</div>
    <div class="answer">${delivery}</div>
  `
  emojiElement.innerHTML = `<img src="${randomEmoji}" alt="random emoji">`;
};