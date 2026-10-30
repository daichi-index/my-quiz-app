//ボタン要素を取得
const quizMakeBtn = document.querySelector('.quizmake-btn');
//画面要素取得
const homeScreen = document.querySelector('.homeScreen');
const quizMakeScreen = document.querySelector('.quizMakeScreen');

//移動処理
export function ScreenMove() {
  quizMakeBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
  });
}
