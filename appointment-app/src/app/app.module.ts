import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
// Two way Data Binding step3:
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {ngOnInit}

@NgModule({
  declarations: [AppComponent, AppointmentListComponent],
  // step4: After importing FormModule, make it available for the componets available in declaraiton.
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
