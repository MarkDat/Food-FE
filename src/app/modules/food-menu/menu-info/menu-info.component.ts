import { Component, OnInit } from '@angular/core';
import { Dish, DishOrder, Menu, MenuInfo, ShoppeModelGrid } from '@app/shared/models/index';
import { ShoppeService } from '@app/shared/services/shoppe.service';
import { finalize } from 'rxjs/operators';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss']
})
export class MenuInfoComponent implements OnInit {

  menus: Menu[] = [];
  menuSelected: Menu = new Menu({});
  dishesCurrent: Dish[] = [];
  tabIndex: number = 0;
  isLoading: boolean = false;
  orderList: DishOrder[] = [];
  isMobile: boolean = false;

  isOrderShow: boolean = false;

  constructor(private shoppeService: ShoppeService, private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.loadMenu();
  }

  loadMenu() {
    this.isLoading = true;

    let menuTest =  this.shoppeService.getMenuTestLocal();
    if(!!menuTest) {
      this.mapMenu(menuTest);
      this.isLoading = false;
      return;
    }

    this.shoppeService.getShoppeMenuInfo('da-nang/com-tam-1989').pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(res => {
      this.mapMenu(res);

      this.shoppeService.setMenuTestLocal(res);
    });
  }

  mapMenu(menu: ShoppeModelGrid<MenuInfo>) {
    this.menus = menu.reply.menu_infos;

    const allMenu = new Menu({
      dish_type_id: -999,
      dish_type_name: 'All'
    });
    
    if(!this.menus.some(_ => _.dish_type_id === -999)) {
      this.menus.unshift(allMenu);
    }

    this.onSelectedAll();
  }

  onSelectedAll() {
    const ALL = 0;
    this.dishesCurrent = []; console.log(this.menus);
    let i = 0;
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

  onClickAdd(dish: Dish) {console.log('clicked');
    const dishOrderTemp = new DishOrder();
    Object.assign(dishOrderTemp, dish);

    const dishOrder = this.orderList.find(_ => _.id == dishOrderTemp.id);
    if(!!dishOrder) {
      dishOrder.quantity++;
      return;
    }
    
    dishOrderTemp.quantity++;
    this.orderList.push(dishOrderTemp);
  }

  showOrderPopup(e) {
    this.isOrderShow = true;
  }

}
