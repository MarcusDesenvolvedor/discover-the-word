import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuAppView } from "./views/menu-app.view";
import { MenuAppRountingModule } from "./menu-app-rounting.module";

@NgModule({
  providers: [DatePipe],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MenuAppRountingModule
  ],
  declarations: [
      MenuAppView,
  ]
})
export class MenuAppModule { }
