const $lottoCount = document.querySelector('.lotto-count');

const Display = {
	updateLottoCount(count) {
		$lottoCount.textContent = `총 ${count}개를 구매하였습니다.`
	},

	printLottoList(lottos) {

	},

	deleteLottoList() {

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
	}
}

export default Display;