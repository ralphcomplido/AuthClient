import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent, LoginComponent, RouterOutlet],
  templateUrl: './user.component.html'
})
export class UserComponent {

}
