import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class SharedModule { }
