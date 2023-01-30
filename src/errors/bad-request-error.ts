import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
	statusCode = 400;
	/**
	 * public message: string is similar to 👇 (this is a short and clean way to doing this)
	 * define public message outside a class
	 * then set message to constructor param message
	 */
	constructor(public message: string) {
		super(message);

		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
