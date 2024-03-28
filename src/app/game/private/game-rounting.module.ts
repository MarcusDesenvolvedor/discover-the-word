import { RouterModule } from "@angular/router";
import { GameView } from "./views/game.view";
import { NgModule } from "@angular/core";
/**
 * @NgModule
 * Módulo de visualização do jogo
 *
 * @author Marcus Ribeiro
 * @since 27/03/2024
 */
@NgModule({
	imports: [RouterModule.forChild([
    {
      path: 'game',
      component: GameView,
    },
	])],
	exports: [RouterModule]
})
export class GameRoutingModule {}
