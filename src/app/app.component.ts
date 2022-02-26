import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faExclamationCircle  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-form';

  faerror = faExclamationCircle
  // show password by click action
  showPassword:string = "password"

  onCheck(event:any){
    console.log(event.target)
    if(this.showPassword == "password"){
      this.showPassword = "text"
    }
    else{
      this.showPassword = "password"
    }
  }

  // grouping form inputs and validating it
  loginForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('',[
      Validators.required
    ]),
    userName: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])
    ),
    password: new FormControl(null, Validators.compose([
      Validators.required
    ])
    ),
    confirmPassword: new FormControl(null, Validators.required)
  })

  get firstName(){
    return this.loginForm.get('firstName')
  }

  get lastName(){
    return this.loginForm.get('lastName')
  }

  get userName(){
    return this.loginForm.get('userName')
  }

  get password(){
    return this.loginForm.get('password')
  }

  

  submitted(){
    console.log(this.loginForm.value)
  }
}
