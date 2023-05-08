import Lotto from './Lotto.js';
import Result from './Result.js';
import Validator from './Validator.js';
import Display from './Display.js';

class App {
	#lottoCount;
	#lottos;

	constructor() {
		this.#lottoCount = 0;
		this.#lottos = [];
	}

	// 처음 금액을 입력 받으면 play
	// 1000원 단위인지 체크 후 lotto 사러 가기
	play(money) {
		if (!Validator.isValidMoney(money))
			alert('금액을 1,000원 단위로 입력해주세요.');
		else {
			this.buyLottos(money / 1000);
		}
	}
	
	// 로또 사기
	// 배열에 lotto 개수별로 채우기
	buyLottos(count) {
		this.#lottoCount += count;

		for (let i = 0; i < count; i++) {
			this.#lottos.push(new Lotto());
		}

		Display.updateLottoCount(this.#lottoCount);
		//NOTE 로또 잘 샀는지 확인
		for (let i = 0; i < this.#lottos.length; i++) {
			console.log(this.#lottos[i].getLotto());
		}
	}

	// 번호보기 토글 클릭 시 로또 번호들 출력
	printLottoList() {
		Display.printLottoList(this.#lottos);
	}

	// 번호보기 토글 다시 클릭 시 로또 번호들 사라짐
	deleteLottoList() {
		Display.deleteLottoList();
	}

	// 결과 확인하기 버튼 클릭 시 모달창에 뜰 결과 만들기
	// 우선 입력된 당첨 번호 및 보너스 번호가 유효한지 체크
	getResult() {
		const $winningNumber = document.querySelectorAll('.winning-number');
		const $bonusNumber = document.querySelector('.bonus-number');
		const winning = [];
		const bonus = parseInt($bonusNumber.value);
		$winningNumber.forEach((el) => winning.push(parseInt(el.value)));

		if (!Validator.isValidWinningNum(winning, bonus))
			return ;

		const result = new Result(winning, bonus);
		result.checkWinning(this.#lottos);
		Display.printResult(result);
	}
}

export default App;
