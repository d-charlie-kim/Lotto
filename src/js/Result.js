import {PLACE, PRIZE} from './constants.js';

class Result {
	#winningNum;
	#bonusNum;
	#rate;
	#matchCount;
	#prize;

	constructor(winning, bonus) {
		this.#winningNum = winning;
		this.#bonusNum = bonus;
		this.#rate = 0;
		this.#matchCount = new Array(8).fill(0);
		this.#prize = 0;
	}

	calculateRate(lottoCount) {
		const consume = lottoCount * 1000;
		const earn = this.#prize;
		this.#rate = ((earn - consume) / consume * 100).toFixed(2);
	}

	calculatePrize() {
		for (let i = 3; i < this.#matchCount.length; i++) {
			switch(i) {
				case PLACE.FIFTH:
					this.#prize += (this.#matchCount[i] * PRIZE.FIFTH);
					continue;
				case PLACE.FOURTH:
					this.#prize += (this.#matchCount[i] * PRIZE.FOURTH);
					continue;
				case PLACE.THIRD:
					this.#prize += (this.#matchCount[i] * PRIZE.THIRD);
					continue;
				case PLACE.SECOND:
					this.#prize += (this.#matchCount[i] * PRIZE.SECOND);
					continue;
				case PLACE.FIRST:
					this.#prize += (this.#matchCount[i] * PRIZE.FIRST);
					continue;
			}
		}
	}

	putWinningArray(count, bonus) {
		if (count === 6)
			this.#matchCount[7]++;
		else if (count === 5 && bonus)
			this.#matchCount[6]++;
		else
			this.#matchCount[count]++;
	}

	checkWinning(lottos) {
		lottos.forEach((el) => {
			const lotto = el.getLotto();
			let bonus = false;
			if (lotto.includes(this.#bonusNum))
				bonus = true;

			let count = 0;
			lotto.forEach((num) => {
				if (this.#winningNum.includes(num))
					count++;
			});

			this.putWinningArray(count, bonus);
		})
		this.calculatePrize();
		this.calculateRate(lottos.length);
	}

	getPrize() {
		return this.#prize;
	}

	getResult() {
		return this.#matchCount;
	}

	getRate() {
		return this.#rate;
	}
}

export default Result;