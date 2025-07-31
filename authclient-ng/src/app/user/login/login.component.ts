import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(public formBuilder: FormBuilder) {}

  isSubmitted: boolean = false;


  form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  hasDisplayError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) && 
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty));
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      // Handle login logic here
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
