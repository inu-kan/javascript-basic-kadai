const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  if (text.textContent === 'ボタンをクリックしてください') {
    setTimeout(() => {
      text.textContent = 'ボタンをクリックしました';
    }, 2000);
  } else {
    text.textContent = ' ボタンをクリックしてください';
  }
});
