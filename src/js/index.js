import App from './App.js';

const app = new App();
const $showResultButton = document.querySelector('.open-result-modal-button');
const $modalClose = document.querySelector('.modal-close');
const $modal = document.querySelector('.modal');
const $lottoNumbersToggleButton = document.querySelector('.lotto-numbers-toggle-button');
const $lottoBuyButton = document.querySelector('.buy-lotto-button');
const $winningRandomNumberButton = document.querySelector('.put-random-prize-button');
const $inputMoney = document.querySelector('.input-money');
const $resetButton = document.querySelector('.reset-button');
const $moneyButton = document.querySelectorAll('.money-button');

const onModalShow = () => {
  if (app.getResult())
    $modal.classList.add('open');
}

const onModalClose = () => {
  $modal.classList.remove('open');
}
  
$showResultButton.addEventListener('click', onModalShow);
$modalClose.addEventListener('click', onModalClose);

$inputMoney.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    app.play($inputMoney.value);
    $inputMoney.value = '';
  }
})

$lottoBuyButton.addEventListener('click', () => {
  app.play($inputMoney.value);
  $inputMoney.value = '';
});

$lottoNumbersToggleButton.addEventListener('click', () => {
  if (!$lottoNumbersToggleButton.checked) {
    app.deleteLottoList();
  }
  else {
    app.printLottoList();
  }
});

$winningRandomNumberButton.addEventListener('click', () => {
  app.makeRandomWinningNumber();
})

$resetButton.addEventListener('click', () => {
  app.clear();
  $modal.classList.remove('open');
})

$moneyButton.forEach((el) => el.addEventListener('click', () => {
  app.putMoney(el.textContent);
}));