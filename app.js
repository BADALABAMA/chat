import { createGif } from './public/api/api.js';
import { keyboardFragment } from './public/Keyboard/keyboard.js';

const app = document.querySelector('#app');
export function Tag(tags = {}) {
  const { tag, className, id, textContent, placeholder } = tags;

  const element = document.createElement(tag);

  element.className = className || ' ';
  element.id = id || ' ';
  element.textContent = textContent || ' ';
  element.placeholder = placeholder || ' ';

  return element;
}

const chat = Tag({
  tag: 'div',
  className: 'chat',
  id: 'chat',
});

const screen = Tag({
  tag: 'div',
  className: 'screen',
  id: 'screen',
});

const emoji = Tag({
  tag: 'button',
  className: 'emoji-btn',
  id: 'emoji-btn',
  textContent: 'EMOJI',
});

const gif = Tag({
  tag: 'button',
  className: 'gif-btn',
  id: 'gif-btn',
  textContent: 'GIF',
});

const keyboardDiv = Tag({
  tag: 'div',
  className: 'keyboard',
  id: 'main-keyboard',
});
keyboardDiv.appendChild(keyboardFragment);
chat.append(screen, emoji, gif);
app.append(chat, keyboardDiv);

const emojiBtn = document.querySelector('#emoji-btn');
const gifBtn = document.querySelector('#gif-btn');
gifBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createGif();
});

emojiBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = '😃';

  emoji.addEventListener('click', (e) => {
    e.preventDefault();
    emoji.remove();
  });

  const containerElement = document.getElementById('screen');
  containerElement.appendChild(emoji);
});

// const app = document.querySelector('#app');

// export function Tag(tags = {}) {
//   const { tag, className, id, textContent, placeholder } = tags;

//   const element = document.createElement(tag);

//   element.className = className || ' ';
//   element.id = id || ' ';
//   element.textContent = textContent || ' ';
//   element.placeholder = placeholder || ' ';

//   return element;
// }

// const chat = Tag({
//   tag: 'div',
//   className: 'chat',
//   id: 'chat',
// });

// const screen = Tag({
//   tag: 'div',
//   className: 'screen',
//   id: 'screen',
//   textContent: 'SCREEN',
// });
// const emoji = Tag({
//   tag: 'button',
//   className: 'emoji-btn',
//   id: 'emoji-btn',
//   textContent: 'EMOJI',
// });
// const gif = Tag({
//   tag: 'button',
//   className: 'gif-btn',
//   id: 'gif-btn',
//   textContent: 'GIF',
// });
// const keyboard = Tag({
//   tag: 'div',
//   className: 'keyboard',
//   id: 'main-keyboard',
//   textContent: 'key',
// });

// chat.append(screen, emoji, gif);
// app.append(chat);
// app.append(keyboard);
