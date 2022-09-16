import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guard";
import { ClientComponent } from "./client.component";

const routes: Routes = [
	{
		path: '',
		component: ClientComponent,
		children: [
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{
				path: 'dashboard',
				data: {},
				canActivate: [AuthGuard],
				loadChildren: () => import('@app/modules/dashboard/dasboard.module').then(m => m.DasboardModule)
			},
			{
				path: 'food-menu',
				data: {},
				canActivate: [AuthGuard],
				loadChildren: () => import('@app/modules/food-menu/food-menu.module').then(m => m.FoodMenuModule)
			}
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class ClientRoutingModule {
}

