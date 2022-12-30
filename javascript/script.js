const generateBtn = document.querySelector(".jokesButton");
const jokeElement = document.querySelector(".joke");
const emojiElement = document.querySelector(".emojiBox");
//const emojis = ["😎", "🤭", "🤣", "😂", "🤪", "🤓", "🤗", "🤔", "🤫", "🤭", "🤫", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊"];
const randomJokeUrl ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart";
const imageUrls = [
  "images/2.png",
  "images/3.png",
  "jokes/images/4.png",
  "jokes/images/5.png",
  "jokes/images/6.png",
  "jokes/images/7.png",
  "jokes/images/8.png",
  "jokes/images/9.png",
  "jokes/images/10.png",
  "jokes/images/11.png",
  "jokes/images/12.png",
  "jokes/images/13.png",
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