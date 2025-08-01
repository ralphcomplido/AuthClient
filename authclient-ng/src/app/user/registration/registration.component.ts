import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';
import { FirstKeyPipe } from '../../shared/pipes/first-key.pipe';
import { AuthService } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FirstKeyPipe, RouterLink],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  constructor(
    public formBuilder: FormBuilder, 
    private service: AuthService,
    private toastr: ToastrService
  ) {
    // Initialization logic can go here
  }

  isSubmitted: boolean = false;

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) : null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if( password && confirmPassword && password.value !== confirmPassword.value) 
      confirmPassword?.setErrors({ passwordMismatch: true })
    else
      confirmPassword?.setErrors(null);

    return null;
  }

  form = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
    confirmPassword: ['']
  },{validators: this.passwordMatchValidator});


  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.createUser(this.form.value).subscribe({
        next: (res:any)=>{
          if(res.succeeded) {
            this.form.reset();
            this.isSubmitted = false;
            this.toastr.success('Registration successful', 'Success');
          }
          else {
            this.toastr.error('Registration failed', 'Error');
            console.error(res);
            }
        },
        error: err=> console.error(err)
      });
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }

  hasDisplayError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) && 
      (this.isSubmitted || Boolean(control?.touched));
  }
}