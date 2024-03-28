import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MenuAppView } from "./views/menu-app.view";
/**
 * @NgModule
 * Módulo de visualização do menu do jogo
 *
 * @author Marcus Ribeiro
 * @since 27/03/2024
 */
@NgModule({
	imports: [RouterModule.forChild([
    {
      path: 'menu',
      component: MenuAppView,
    },
	])],
	exports: [RouterModule]
})
export class MenuAppRountingModule {}
