import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { SignupCardComponent } from '../../components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from '../../components/reactive-login/reactive-login.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LoginComponent,SignupCardComponent,ReactiveLoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  login:boolean=true;

  toggleLogin(){
    this.login = !this.login;
  }
}
