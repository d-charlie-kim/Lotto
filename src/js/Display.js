
const Display = {
	putMoneyInput(money) {
		const $inputMoney = document.querySelector('.input-money');
		$inputMoney.value = money;
	},

	updateLottoCount(count) {
		const $lottoCount = document.querySelector('.lotto-count');
		$lottoCount.textContent = `총 ${count}개를 구매하였습니다.`
	},

	printLottoList(lottos) {
		const $ticketScreen = document.querySelector('.lotto-ticket-screen');
		lottos.forEach((el) => {
			const lotto = el.getLotto();
			const screenWrap = document.createElement('div');
			screenWrap.className = 'screen-wrap';
			lotto.forEach((num) => {
				const lottoNum = document.createElement('p');
				lottoNum.textContent = num;
				screenWrap.appendChild(lottoNum);
			})
			$ticketScreen.appendChild(screenWrap);
		})
	},
	
	deleteLottoList() {
		const $ticketScreen = document.querySelector('.lotto-ticket-screen');
		const $screenWrap = document.querySelectorAll('.screen-wrap');
		$screenWrap.forEach((el) => {
			$ticketScreen.removeChild(el);
		})
	},

	printResult(result) {
		const $lottoResultScreen = document.querySelectorAll('.lotto-result');
		const $lottoResultRate = document.querySelector('.lotto-result-rate');
		const matchCount = result.getResult();
		const lose = matchCount[0] + matchCount[1] + matchCount[2];

		$lottoResultScreen[0].textContent = `${lose}개`;
		for (let i = 3; i < matchCount.length; i++) {
				$lottoResultScreen[i - 2].textContent = `${matchCount[i]}개`;
		}
		$lottoResultRate.textContent = `당신의 총 수익률은 ${result.getRate()}%입니다.`
	},
	
	putWinningNumber(winning, bonus) {
		const $winningNumber = document.querySelectorAll('.winning-number');
		const $bonusNumber = document.querySelector('.bonus-number');

		$winningNumber.forEach((el, i) => el.value = winning[i]);
		$bonusNumber.value = bonus;
	},

	showAlert(str) {
		alert(str);
		return false;
	},

	screenClear() {
		const $lottoResultScreen = document.querySelectorAll('.lotto-result');
		const $lottoResultRate = document.querySelector('.lotto-result-rate');

		this.updateLottoCount(0);
		this.putWinningNumber(['','','','','',''], '');
		$lottoResultRate.textContent = `당신의 총 수익률은 0%입니다.`;
		$lottoResultScreen.forEach((el) => el.textContent = 0);
	}
}

export default Display;