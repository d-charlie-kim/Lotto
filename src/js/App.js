import Lotto from './Lotto.js';
import Result from './Result.js';
import Validator from './Validator.js';
const validator = new Validator();

class App {
	#money;
	#lottos;

	constructor() {
		this.#money = 0;
		this.#lottos = [];
	}

	// 처음 금액을 입력 받으면 play
	// 1000원 단위인지 체크 후 lotto 사러 가기
	play(money) {
		if (!validator.isValidMoney(money))
			alert('금액을 1,000원 단위로 입력해주세요.');
		else {
			this.#money = money;
			console.log(this.#money);
		}
	}

	// 로또 사기
	buyLotto(count) {
		while (count > 0) {
			this.#lottos.push(new Lotto());
			count--;
		}
	}
}

export default App;