import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodMenuComponent,
    children: [
      { path: '', redirectTo: 'menu-info', pathMatch: 'full' },
      {
				path: 'menu-info',
				component: MenuInfoComponent
			}
    ],
  },
];

@NgModule({
  declarations: [FoodMenuComponent, MenuInfoComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class FoodMenuModule { }
