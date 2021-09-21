import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue API key
     AgmCoreModule.forRoot({apiKey: 'YAIzaSyC7PJyVxy9LaMzdFOM0QffJlK8QcXKj9zQ'}), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }