import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListGroupMenuComponent, DishListComponent, OrderFormComponent } from '@app/shared/components';
import { DxButtonModule, DxListModule, DxLoadPanelModule } from 'devextreme-angular';
import { TruncatePipe } from '@app/pipe';

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
  OrderFormComponent,
];

export const PIPES = [
  TruncatePipe
];

@NgModule({
  declarations: [
    ...COMPONENT, ...PIPES
  ],
  imports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES],
  exports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES, ...COMPONENT]
})
export class SharedModule { }
