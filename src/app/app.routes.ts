import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { AllDistrictsComponent } from './pages/all-districts/all-districts.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"districts",component:AllDistrictsComponent},
    {path:"signup",component:SignupComponent},
    {path:"district/:id",component:DistrictComponent},
];
