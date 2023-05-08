import App from './App.js';

const app = new App();
const $showResultButton = document.querySelector('.open-result-modal-button');
const $modalClose = document.querySelector('.modal-close');
const $modal = document.querySelector('.modal');
const $lottoNumbersToggleButton = document.querySelector('.lotto-numbers-toggle-button');
const $lottoBuyButton = document.querySelector('.buy-lotto-button');
const $inputMoney = document.querySelector('.input-money');

const onModalShow = () => {
  app.getResult();
  $modal.classList.add('open');
}

const onModalClose = () => {
  $modal.classList.remove('open');
}
  
$showResultButton.addEventListener('click', onModalShow);
$modalClose.addEventListener('click', onModalClose);

$lottoBuyButton.addEventListener('click', () => {
  app.play($inputMoney.value);
});

$lottoNumbersToggleButton.addEventListener('click', () => {
  if ($lottoNumbersToggleButton.checked) {
    app.deleteLottoList();
  }
  else {
    app.printLottoList();
  }
});