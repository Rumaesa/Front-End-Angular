import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private apiUrl = 'http://localhost:3000';

  // constructor() {
  //   let savedReservations = localStorage.getItem('reservation');
  //   this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  // }

  constructor(private httpClient: HttpClient) {}

  // CRUD Operation:
  getReservations(): Observable<Reservation[]> {
    // return this.reservations;
    return this.httpClient.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  // getReservation(id: string): Reservation | undefined {
  //   return this.reservations.find((res) => res.bookingId === id);
  // }

  getReservation(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    // console.log(reservation.bookingId);
    // reservation.bookingId = Date.now().toString();
    // console.log(reservation.bookingId);
    // this.reservations.push(reservation);
    // console.log(reservation);
    // localStorage.setItem('reservation', JSON.stringify(this.reservations));
    // Mockoon:
    return this.httpClient.post<void>(
      this.apiUrl + '/reservation',
      reservation
    );
  }

  deleteReservation(id: string): Observable<void> {
    // let index = this.reservations.findIndex((res) => res.bookingId === id);
    // this.reservations.splice(index, 1);
    // localStorage.setItem('reservation', JSON.stringify(this.reservations));
    // Mockoon:
    return this.httpClient.delete<void>(this.apiUrl + '/reservation/' + id);
  }

  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    // let index = this.reservations.findIndex((res) => res.bookingId === id);
    // this.reservations[index] = updatedReservation;
    // localStorage.setItem('reservation', JSON.stringify(this.reservations));
    // Mackoon:
    return this.httpClient.put<void>(
      this.apiUrl + '/reservation' + id,
      updatedReservation
    );
  }
}
