import { Injectable } from '@angular/core';
import { BaseService } from '@app/services';
import { Observable } from 'rxjs';
import { MenuInfo, ShoppeModelGrid } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class ShoppeService {

  constructor(private baseService: BaseService) { }

  getShoppeMenuInfo(partUrl: string): Observable<ShoppeModelGrid<MenuInfo>> {
    return this.baseService.getBase(`https://food-menu-order.herokuapp.com/food-order/1?url=${partUrl}`);
  }
}
