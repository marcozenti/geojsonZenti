import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: any;
  position: any;
  position2: any;
  positionBV: any;
  label: string;
  casa: any;
  lblCasa: string;
  circleOptions: { fillColor: string; };
  rectangleOptions: {fillColor: string;};
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: google.maps.MarkerOptions;
  markerOptions3: google.maps.MarkerOptions;
  markerOptions4: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  vertices1: google.maps.LatLngLiteral[]

  constructor() {

    this.center = { lat: 45.506738, lng: 9.190766 };
    this.casa = { lat: 45.5158773, lng: 9.2110251 };
    this.position = this.center;
    this.position2 = { lat: 45.507000, lng: 9.191000 }
    this.positionBV = { lat: 45.4855753, lng: 9.1882422 }
    this.label = "Scuola";
    this.lblCasa = "Casa"
    this.circleOptions = { fillColor: 'red' }
    this.rectangleOptions = {fillColor: 'grey'};

    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60)
    }

    let iconData2: google.maps.Icon = {
      url: './assets/img/house-png.png',
      scaledSize: new google.maps.Size(60, 60)
    }

    let iconData3: google.maps.Icon = {
      url: './assets/img/kwbear.png',
      scaledSize: new google.maps.Size(60, 60)
    }

    let iconData4: google.maps.Icon = {
      url: './assets/img/tree.png',
      scaledSize: new google.maps.Size(60, 60)
    }


    this.markerOptions = { icon: iconData }
    this.markerOptions2 = { icon: iconData2 }
    this.markerOptions3 = { icon: iconData3 }
    this.markerOptions4 = { icon: iconData4 }

    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 }
    ];

    this.vertices1 = [
      { lat: this.center.lat + 0.001, lng: this.center.lng },
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.002 },
      { lat: this.center.lat - 0.001, lng: this.center.lng }
    ];

    
  }

  

 

onSave(color: string) {
  this.circleOptions = { fillColor: color }
}

rectangleColor(color: string) {
  this.rectangleOptions = { fillColor: color }
}


}

