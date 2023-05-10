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
				case 3:
					this.#prize += (this.#matchCount[i] * 5000);
					continue;
				case 4:
					this.#prize += (this.#matchCount[i] * 50000);
					continue;
				case 5:
					this.#prize += (this.#matchCount[i] * 1500000);
					continue;
				case 6:
					this.#prize += (this.#matchCount[i] * 30000000);
					continue;
				case 7:
					this.#prize += (this.#matchCount[i] * 2000000000);
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