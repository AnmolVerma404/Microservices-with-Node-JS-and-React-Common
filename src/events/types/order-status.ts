export enum OrderStatus {
	/**
	 * When the order is created, but the ticket it is trying to order has not been reserved
	 */
	Created = 'created',
	/**
	 * The ticket the order is trying to reserve is already been reserved or,
	 * When the user hava cancelled the ticket
	 * If order expires before payment
	 */
	Cancelled = 'cancelled',
	/**
	 * When an order has successfully reserved the ticket
	 */
	AwaitingPayment = 'awaiting:payment',
	/**
	 * The order has reserved successfully,
	 * The user has provided payment successfully.
	 */
	Complete = 'complete',
}
