class Validator {
	isValidMoney(money) {
		if (money % 1000 !== 0)
			return false;
		return true;
	}

	validate() {
		alert('!!!!');
	}
}

export default Validator;