import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListGroupMenuComponent, DishListComponent } from '@app/shared/components';
import { DxButtonModule, DxListModule, DxLoadPanelModule } from 'devextreme-angular';

export const COMMON_MODULES = [
	CommonModule, RouterModule,
];

export const DEV_EXTREME_MODULES = [
  DxListModule,
  DxButtonModule,
  DxLoadPanelModule,
];

export const COMPONENT = [
  ListGroupMenuComponent,
  DishListComponent,
];


@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES],
  exports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES, ...COMPONENT]
})
export class SharedModule { }
