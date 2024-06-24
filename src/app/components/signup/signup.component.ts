import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signupcard',
  standalone: true,
  imports: [FormsModule],
  providers:[DatePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupCardComponent {
  @Output() newItemEvent = new EventEmitter();
  addNewItem() {
    this.newItemEvent.emit();
  }

  
 constructor(private datePipe:DatePipe){}
  formatDate(date:any){
    return this.datePipe.transform(date,'longDate')
  }

  onSubmit(form: any) {
    let formData = form.value;
    formData = {...formData,dob:this.formatDate(formData.dob)}
    console.log(formData);

  }
  
}
