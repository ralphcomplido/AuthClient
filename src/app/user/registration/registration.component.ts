import { Component } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(public formBuilder: FormBuilder) {
    // Initialization logic can go here
  }

  form = this.formBuilder.group({
    fullName: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  })

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}