import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
	id: string;
	email: string;
}

// class reqCU extends Request { // This will not work as need to access this from almost everywhere
// 	constructor(public email: string, public id: string) {
// 		super('a');

// 		Object.setPrototypeOf(this, reqCU.prototype);
// 	}
// 	currentUser = {
// 		id: this.id,
// 		email: this.email,
// 	};
// }

/**
 * Above way was the way we did add some extra property to a pre existed class in TS
 * But as we need payload jwt in every moment for auth.
 * Therefore we will globaly change the Request interface by adding a currentUser property .
 * Instead of extending Request Class
 */
declare global {
	namespace Express {
		interface Request {
			currentUser?: UserPayload;
		}
	}
}

export const currentUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.session?.jwt) {
		return next(); // This will call require Auth middleware if it's stated in the request
	}

	try {
		const payload = jwt.verify(
			req.session.jwt,
			process.env.JWT_KEY!
		) as UserPayload;
		// new reqCU(payload.email, payload.id); // This will not work as need to access this from almost everywhere
		req.currentUser = payload;
	} catch (err) {}
	next();
};
