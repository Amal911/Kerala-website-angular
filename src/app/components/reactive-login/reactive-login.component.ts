import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-login.component.html',
  styleUrl: './reactive-login.component.scss',
})
export class ReactiveLoginComponent {
  loginForm: any;
  submitted: boolean = false;
  @Output() newItemEvent = new EventEmitter();
  addNewItem() {
    this.newItemEvent.emit();
  }

  
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted = true;
      console.log(this.loginForm.value);
    }
  }
}
