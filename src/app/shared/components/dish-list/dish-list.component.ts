import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '@app/models';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  @Input() dishes: Dish[] = [];

  @Output() clickAdd = new EventEmitter<Dish>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickImage(){
    console.log('click image');
  }

  onClickAdd(item: Dish) {
    this.clickAdd.emit(item);
  }
}
