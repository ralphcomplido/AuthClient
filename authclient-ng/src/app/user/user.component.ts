import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { ChildrenOutletContexts, RouterOutlet } from "@angular/router";
import { LoginComponent } from './login/login.component';
import {trigger, style, animate, transition, query } from '@angular/animations';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent, LoginComponent, RouterOutlet],
  templateUrl: './user.component.html',
  animations: [
    trigger('routerFadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in-out', style({ opacity: 1 }))
        ], {optional: true}),
      ])
    ])
  ]
})
export class UserComponent {
  
  constructor(private context: ChildrenOutletContexts) { }

  getRouteUrl() {
    return this.context.getContext('primary')?.route?.url;
  }

}
