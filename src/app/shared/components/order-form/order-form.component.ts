import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish, DishOrder } from '@app/models';
import * as lodash from 'lodash';

@Component({
	selector: 'app-order-form',
	templateUrl: './order-form.component.html',
	styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

	private _ordersSource: DishOrder[];
	@Input() get ordersSource(): DishOrder[] {
		return this._ordersSource || [];
	}

	set ordersSource(value) {
		if (this._ordersSource !== value) {
			this._ordersSource = value;
			this.ordersSourceChange.emit(value);
		}
	}

	get orderEmpty(): boolean {
		return this.ordersSource.some(_ => _.id);
	}

	get total(): number {
		if (!this.ordersSource) {
			return 0;
		}

		return lodash.sumBy(this.ordersSource, function (o) { return o.price.value * o.quantity; });
	}

	@Output() ordersSourceChange = new EventEmitter<DishOrder[]>();

	constructor() { }

	ngOnInit(): void {
	}

	addQuantity(dishOrder: DishOrder) {
		dishOrder.quantity++;

	}

	minusQuantity(dishOrder: DishOrder) {
		dishOrder.quantity--;

		if (dishOrder.quantity <= 0) {
			this.removeOrder(dishOrder.id);
		}
	}

	removeOrder(id: number) {
		const dishOrderIndex = this.ordersSource.findIndex(_ => _.id === id);
		this.ordersSource.splice(dishOrderIndex, 1);
	}

	clearCart(e) {
		this.ordersSource = [];
	}
}
