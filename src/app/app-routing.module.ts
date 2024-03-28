import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

/**
 * @NgModule
 * Módulo de roteamento do projeto
 *
 * @author Marcus Ribeiro
 * @since 27/03/2024
 */
@NgModule({
	imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'initial/menu',
      pathMatch: 'full'
    },
		{
			path: 'play',
			loadChildren: () => import('./game/private/game.module').then(m => m.GameModule)
		},
    {
      path: 'initial',
      loadChildren: () => import('./menu-app/private/menu-app.module').then(m => m.MenuAppModule)
    }
	])],
	exports: [RouterModule]
})
export class AppRoutingModule {}
