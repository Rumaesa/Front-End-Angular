import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservation');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  // CRUD Operation:
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.bookingId === id);
  }

  addReservation(reservation: Reservation): void {
    console.log(reservation.bookingId);
    reservation.bookingId = Date.now().toString();
    console.log(reservation.bookingId);
    this.reservations.push(reservation);
    console.log(reservation);
    localStorage.setItem('reservation', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.bookingId === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservation', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex((res) => res.bookingId === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservation', JSON.stringify(this.reservations));
  }
}
