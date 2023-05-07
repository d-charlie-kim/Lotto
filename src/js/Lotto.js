import Validator from './Validator.js';

class Lotto {
	#numbers;

	constructor() {
		this.#numbers = this.randomSixNum();
	}

	// Math.random 활용 6개 숫자 뽑기
	// 오름차순으로 정렬해서 #numbers에 넣어준다.
	randomSixNum() {
		let lotto = [];
		for (let i = 0; i < 6; ) {
			let newNum = Math.floor(Math.random() * 45);
			if (newNum === 0 || lotto.includes(newNum))
				continue;
			lotto.push(newNum);
			i++;
		}
		return(lotto.sort((a,b) => (a - b)));
	}

	getLotto() {
		return this.#numbers;
	}
}

export default Lotto;