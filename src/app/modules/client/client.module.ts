import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClientRoutingModule } from '@app/modules/client/client-routing.module';
import { ClientComponent } from './client.component';
import { SideNavOuterToolbarComponent } from './side-nav-outer-toolbar/side-nav-outer-toolbar.component';

@NgModule({
  declarations: [
    ClientComponent,
    SideNavOuterToolbarComponent,
  ],
  imports: [
    SharedModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
