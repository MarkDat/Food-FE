import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';

const routes: Routes = [
	{path: '', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)}
];

const config: ExtraOptions = {
	useHash: false
};

@NgModule({
	imports: [RouterModule.forRoot(routes, config)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
