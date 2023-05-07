const $lottoCount = document.querySelector('.lotto-count');

const Display = {
	updateLottoCount(count) {
		$lottoCount.textContent = `총 ${count}개를 구매하였습니다.`
	},
}

export default Display;