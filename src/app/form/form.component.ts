import { Component } from '@angular/core';
import { PasswordService } from 'src/services/password.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  password: string = '';
  shortPassword: boolean = false;
  easyPassword: boolean = false;
  mediumPassword: boolean = false;
  strongPassword: boolean = false;

  constructor(private passwordService: PasswordService) {}

  checkPassword() {
    const result = this.passwordService.checkPassword(this.password);
    this.shortPassword = result.shortPassword;
    this.easyPassword = result.easyPassword;
    this.mediumPassword = result.mediumPassword;
    this.strongPassword = result.strongPassword;
  }

  passwordChange(password: string) {
    this.password = password;
    this.checkPassword();
  }
}