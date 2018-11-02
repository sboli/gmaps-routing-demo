import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gmaps-routing-demo';
  lat = 16.2650;
  lng = -61.5710;
  zoom = 12;
  map: google.maps.Map | undefined = undefined;


  onMapReady(map: google.maps.Map) {
    this.map = map;
  }
}
