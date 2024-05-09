import { Component } from '@angular/core';
import { Appointment } from '../model/Appointment';
// import {ngOnInit}
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  // Adding Apppointment values to the object
  // appointment: Appointment = {
  //   id: 1,
  //   title: 'Take dog for a walk',
  //   date: new Date('2024-05-07'),
  // };

  // --------------------------------------------------------

  // Two way Data Binding:
  // 1. Create an Array to store multiple appointments:

  appointments: Appointment[] = [];

  // 2. Create HTML form to accept input from UI: appointment-list.component.html

  // 3. To bind the data, import FormModule in app.module.ts
  // 4. Make formModule available for the components by adding it to the import array in NgModel declaration.
  // 5. Create a field in component to store the coming value from the form:
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let savedAppointments = localStorage.getItem('appointments');

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  // 6. Bind this field with the input field in the html.
  // 7. Add event to the Add button.
  // 8. Create a method to be executed on click event of the button:
  addAppointment() {
    // alert(this.newAppointmentTitle + ' ' + this.newAppointmentDate);
    // 9. Add Data to the appointments array only if the fields are not empty:
    // 10. check first if the data is present in the field or not:
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      // 11. creating an appointmnent object and adding value to it.
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      // 12. newAppointment object is ready to be pushed in the appointments Array:
      this.appointments.push(newAppointment);

      // 13. Once the appointment is pushed to the array clear the input field:
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      // ...This will clear the input field. Means, From component sending data to the HTML.
      // therefore, This is how the two way binding works.......
      // 14. To check that the appointment is added to the list, Show the array size in the alert box:
      // alert(this.appointments.length);

      // Add appointment array to the local storage:
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  // To remove an Element from the list:
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
