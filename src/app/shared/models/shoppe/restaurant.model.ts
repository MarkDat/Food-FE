export class Restaurant {
    delivery_id: number;
    restaurant_id: number;

	public constructor(init?: Partial<Restaurant>) {
		Object.assign(this, init);
	}
}