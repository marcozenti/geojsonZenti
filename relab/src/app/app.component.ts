import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  casa :any;
  lblCasa :string;
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.casa={lat: 45.5158773, lng: 9.2110251};
    this.position = this.center;
    this.label = "Scuola";
    this.lblCasa = "Casa"
  }

}