import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameRoutingModule } from "./game-rounting.module";
import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameView } from "./views/game.view";

@NgModule({
  providers: [DatePipe],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      GameRoutingModule
  ],
  declarations: [
      GameView,
  ]
})
export class GameModule { }
