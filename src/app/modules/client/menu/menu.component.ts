import { Component, OnInit } from '@angular/core';
import { ShoppeService } from '@app/services';
import { Dish, Menu } from '@app/models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  menus: Menu[] = [];
  menuSelected: Menu = new Menu({});
  dishesCurrent: Dish[] = [];
  tabIndex: number = 0;
  isLoading: boolean = false;

  constructor(private shoppeService: ShoppeService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this.isLoading = true;
    this.shoppeService.getShoppeMenuInfo('da-nang/com-tam-1989').pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(res => {
      this.menus = res.reply.menu_infos;

      const allMenu = new Menu({
        dish_type_id: -1,
        dish_type_name: 'All'
      });

      this.menus.unshift(allMenu);
      this.onSelectedAll();

      console.log(res);
    });
  }

  onSelectedAll() {
    const ALL = 0;
    this.dishesCurrent = [];
    this.menus.map((menu, index) => {
      if(index !== ALL) {
        this.dishesCurrent.push(...menu.dishes);
      }
    });

    console.log(this.dishesCurrent);
  }

  onGroupIndexSelected(index: number) {
    const ALL = 0;

    if (index === ALL) {
        this.onSelectedAll();
        return;
    }

    this.menuSelected = this.menus[index];
    this.dishesCurrent = this.menuSelected.dishes;
  }
}
