import Lotto from './Lotto.js';
import Result from './Result.js';
import Validator from './Validator.js';
import Display from './Display.js';

class App {
	#totalMoney;
	#lottoCount;
	#lottos;

	constructor() {
		this.#totalMoney = 0;
		this.#lottoCount = 0;
		this.#lottos = [];
	}

	// 처음 금액을 입력 받으면 play
	// 1000원 단위인지 체크 후 lotto 사러 가기
	play(money) {
		if (!Validator.isValidMoney(money))
			alert('금액을 1,000원 단위로 입력해주세요.');
		else {
			this.#totalMoney += money;
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
		// for (let i = 0; i < this.#lottos.length; i++) {
		// 	console.log(this.#lottos[i].getLotto());
		// }
	}
}

export default App;