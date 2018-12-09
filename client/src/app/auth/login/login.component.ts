import { Component, ViewChild } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  @ViewChild('form') signupForm: NgForm;
  login() {
    // console.log(this.signupForm);
  }
}
