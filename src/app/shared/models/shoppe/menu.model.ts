export class MenuInfo {
	menu_infos: Menu[];

	constructor(init?: Partial<MenuInfo>) {
		Object.assign(this, init);
	}
}

export class Menu {
	dish_type_id: number;
	dish_type_name: string;
	dishes: Dish[];

	constructor(init?: Partial<Menu>) {
		Object.assign(this, init);
	}
}

export class Dish {
	id: number;
	name: string;
	description: string;

	is_active: boolean;
	is_available: boolean;
	is_deleted: boolean;
	is_group_discount_item: boolean;

	price: DishPrice;
	discount_price: DishPrice;
	photos: DishPhoto[];

	total_like: number;

	constructor(init?: Partial<Dish>) {
		Object.assign(this, init);
	}
}

export class DishPrice {
	text: string;
	unit: string;
	value: number;

	constructor(init?: Partial<DishPrice>) {
		Object.assign(this, init);
	}
}

export class DishPhoto {
	width: number;
	value: string;
	height: number;

	constructor(init?: Partial<DishPhoto>) {
		Object.assign(this, init);
	}
}

export class DishOrder extends Dish {
	quantity: number = 0;

	constructor(init?: Partial<DishOrder>) {
		super();
		Object.assign(this, init);
	}
}