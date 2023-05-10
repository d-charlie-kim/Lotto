const Validator = {
	isValidMoney(money) {
		if (money === '' || money % 1000 !== 0)
			return false;
		return true;
	},

	isValidLottoNum(current, newNum) {
		if (newNum === 0)
			return false;
		if (current.includes(newNum))
			return false;
		return true;
	},

	isValidWinningNum(winningNum, bonusNum) {
		return true;
	}
}

export default Validator;