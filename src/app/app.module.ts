import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';
import { CarbonFootprintCalculatorComponent } from './carbon-footprint-calculator/carbon-footprint-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CarbonFootprintCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
