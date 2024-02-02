import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  // Options pour l'autocomplétion de l'API Google Places
  placesOptions = {
    types: [],
    componentRestrictions: { country: 'tn' }, // Restriction à la Tunisie
  };
  event: Event = {
    name: '',
    category: '',
    state: '',
    eventType: '',
    placeName: '',
    placeMap: '',
    organizedBy: '',
    picture: '',
  };

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {}

  // Méthode pour créer un nouvel événement
  createEvent(): void {
    // Appeler le service d'événements pour créer l'événement et naviguer vers la page d'accueil
    this.eventService.createEvent(this.event).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  // Méthode pour gérer les modifications de l'adresse sélectionnée par l'API Google Places
  handleAddressChange(address: any): void {
    // Mettre à jour le nom et la carte de l'événement en fonction de l'adresse sélectionnée
    this.event.placeName = address.name;
    this.event.placeMap = address.formatted_address;
  }
}
