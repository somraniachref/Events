import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  // Détails de l'événement
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit(): void {
    // S'abonner aux paramètres de l'URL pour obtenir l'ID de l'événement
    this.route.params.subscribe((params) => {
      const eventId = params['id'];
      // Charger les détails de l'événement
      this.loadEvent(eventId);
    });
  }

  // Fonction pour charger les détails de l'événement
  loadEvent(id: string): void {
    this.eventService.getEventById(id).subscribe((event) => {
      this.event = event;
    });
  }

 
  goBack(): void {
   
  }
}
