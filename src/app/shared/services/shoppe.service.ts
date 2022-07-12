import { Injectable } from '@angular/core';
import { BaseService } from '@app/services';
import { Observable } from 'rxjs';
import { MenuInfo, ShoppeModelGrid } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class ShoppeService {

  KEY_MENU_LOCAL = "menuTest";

  constructor(private baseService: BaseService) { }

  getMenuTestLocal(): ShoppeModelGrid<MenuInfo> {
    return JSON.parse(localStorage.getItem(this.KEY_MENU_LOCAL) || "null") as ShoppeModelGrid<MenuInfo> || null;  
  }

  setMenuTestLocal(menu: ShoppeModelGrid<MenuInfo>) {
    localStorage.setItem(this.KEY_MENU_LOCAL, JSON.stringify(menu));
  }

  getShoppeMenuInfo(partUrl: string): Observable<ShoppeModelGrid<MenuInfo>> {
    return this.baseService.getBase(`https://food-menu-order.herokuapp.com/food-order/1?url=${partUrl}`);
  }
}
