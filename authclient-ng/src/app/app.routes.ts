import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';


export const routes: Routes = [
    {path: '', component: UserComponent,
        children: [
            {path: 'signup', component: RegistrationComponent},
            {path: 'signin', component: LoginComponent}
        ]
    },
    {path: 'dashboard', component: DashboardComponent},
];
