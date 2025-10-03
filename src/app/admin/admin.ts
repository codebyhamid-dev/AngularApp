import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  model: any = {};

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.error('Form is invalid');
      form.control.markAllAsTouched();
      return;
    }
    console.log(form.value);
  }

  onReset(form: NgForm) {
    form.resetForm();
  }
  
  onFileSelected(event:any){
    const file=event.target.file[0]

  }
}
