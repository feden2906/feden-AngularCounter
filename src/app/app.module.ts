import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TitleComponent } from './components/title/title.component';
import { ResultComponent } from './components/result/result.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TitleComponent,
    ResultComponent,
    ButtonsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
