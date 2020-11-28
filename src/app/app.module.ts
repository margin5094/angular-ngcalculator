import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from "./calculator/calculator.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CalculatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
