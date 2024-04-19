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
      redirectTo: 'play/game',
      pathMatch: 'full'
    },
		{
			path: 'play',
			loadChildren: () => import('./game/private/game.module').then(m => m.GameModule)
		}
	])],
	exports: [RouterModule]
})
export class AppRoutingModule {}
