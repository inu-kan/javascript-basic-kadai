const textBtn = document.getElementById('btn');

const text = document.getElementById('text');

textBtn.addEventListener('click', () => {
  if (text.textContent === 'ボタンをクリックしてください') {
    text.textContent = 'ボタンをクリックしました';
  } else {
    text.textContent = 'ボタンをクリックしてください';
  }
});
