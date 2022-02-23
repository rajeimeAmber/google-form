import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-form';

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

}
