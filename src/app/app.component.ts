import { Component, EventEmitter, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from '@agm/core';
import { Map, DirectionsService, DirectionsRenderer } from '@google/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gmaps-routing-demo';
  guadeloupe = {
    lat: 16.2650,
    lng: -61.5710
  };
  zoom = 12;
  map: Map | undefined = undefined;
  markers = [];
  waypoints = [];

  ngOnInit(): void {
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  onMapClick(evt: MouseEvent) {
    this.addMarker(evt.coords);
  }

  addMarker(latLng: LatLngLiteral) {
    this.markers.push(latLng);
    this.waypoints.push({
      location: latLng,
      stopover: true
    });
  }

}

