import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
// import {FlexLayoutModule} from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, MatCardModule, MatSnackBarModule, MatInputModule],
})
export class ProductModule {}
