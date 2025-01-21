import { Routes } from '@angular/router';
import { LinkedinProfileComponent } from './linkedin-profile/linkedin-profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'linkedin', component: LinkedinProfileComponent},

];
