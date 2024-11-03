const areaBtn = document.getElementById('btn');
const parentText = document.getElementById('text');
areaBtn.addEventListener('click', () => {
  parentText.textContent = 'ボタンをクリックしました';
});