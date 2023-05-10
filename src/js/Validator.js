const Validator = {
	isValidMoney(money) {
		if (money === '' || money % 1000 !== 0)
			return 1;
		else if (money > 10000000)
			return 2;
		return 0;
	},

	isValidLottoNum(current, newNum) {
		if (newNum === 0)
			return false;
		if (current.includes(newNum))
			return false;
		return true;
	},

	isValidWinningNum(winningNum, bonusNum) {
		const check = winningNum;
		check.push(bonusNum);

		let i = 0;
		for (const el of check) {
			if (!/[0-9]/g.test(el))
				return false;
			if (el < 1 || el > 45)
				return false;
			if (check.indexOf(el) != i)
				return false;
			i++;
		}
		return true;
	}
}

export default Validator;