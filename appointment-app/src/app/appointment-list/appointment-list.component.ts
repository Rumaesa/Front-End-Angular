import { Component } from '@angular/core';
import { Appointment } from '../model/Appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: 'Take dog for a walk',
    date: new Date('2024-05-07'),
  };
}
