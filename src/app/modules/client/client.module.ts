import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { SharedModule } from '@app/shared/shared.module';
import { ClientRoutingModule } from '@app/modules/client/client-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ClientComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
