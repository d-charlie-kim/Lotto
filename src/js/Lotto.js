import Validator from './Validator.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		Validator.validate(numbers);
		this.#numbers = numbers;
	}
}

export default Lotto;