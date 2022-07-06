import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
	{
		path: '',
		component: ClientComponent,
		children: [
			{path: '', redirectTo: 'menu', pathMatch: 'full'},
			{path:'menu', component: MenuComponent},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class ClientRoutingModule {
}

