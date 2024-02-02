import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Définition de l'URL de l'API pour les événements
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  // Récupération de tous les événements
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  // Récupération d'un événement par son identifiant
  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

  // Création d'un nouvel événement
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  // Mise à jour d'un événement existant
  updateEvent(id: string, event: Event): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, event);
  }

  // Suppression d'un événement par son identifiant
  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
