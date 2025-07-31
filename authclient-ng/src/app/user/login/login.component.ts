import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    public formBuilder: FormBuilder, 
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
      this.service.signin(this.form.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: err => {
          if(err.status === 400) {
            this.toastr.error('Invalid email or password', 'Login Failed');
          } 
          else {
            this.toastr.error('An error occurred during login', 'Error');
          }
        }
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
