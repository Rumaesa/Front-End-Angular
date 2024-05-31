import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      // let reservation = this.reservationService.getReservation(id);
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        // update:
        // this.reservationService.updateReservation(id, reservation);
        // Mackoon:
        this.reservationService
          .updateReservation(id, reservation)
          .subscribe(() => {
            console.log('updated..');
          });
      } else {
        // new:
        // this.reservationService.addReservation(reservation);
        // Mackoon:
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('Reservation added successfully');
        });
      }

      this.router.navigate(['/list']);
    }
  }
}
