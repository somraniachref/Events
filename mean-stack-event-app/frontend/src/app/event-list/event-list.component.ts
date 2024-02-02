import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // List of events
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    // Load events on component initialization
    this.loadEvents();
  }

  // Function to load events
  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );
  }

  // Function to view details of an event
  viewDetails(eventId: string): void {
    console.log('View Details clicked for event ID:', eventId);
  }

  // Function to edit an event
  editEvent(eventId: string): void {
    console.log('Edit Event clicked for event ID:', eventId);
  }

  // Function to delete an event
  deleteEvent(eventId: string): void {
    console.log('Delete Event clicked for event ID:', eventId);
  }

  // Navigate to the create page
  navigateToCreatePage() {
    this.router.navigate(['/create']);
  }
}
