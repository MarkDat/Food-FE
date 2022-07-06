import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '@app/models';

@Component({
  selector: 'app-list-group-menu',
  templateUrl: './list-group-menu.component.html',
  styleUrls: ['./list-group-menu.component.scss']
})
export class ListGroupMenuComponent implements OnInit {
  @Input() menus: Menu[];
  
  @Output() onSelectedItemIndex = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(ev: any) {
    this.onSelectedItemIndex.emit(ev.itemIndex);
  }
}
