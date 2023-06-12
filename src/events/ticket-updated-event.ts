import { Subjects } from './subjects';

/**
 * Using this method we can take care of type checking
 * In future if we have multiple events we can just list them out here.
 */
export interface TicketUpdatedEvent {
	subject: Subjects.TicketUpdated;
	data: {
		id: string;
		version: number;
		title: string;
		price: number;
		userId: string;
		orderId?: string;
	};
}
