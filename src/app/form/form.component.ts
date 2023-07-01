import { Component } from '@angular/core';

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

  checkPassword() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      this.password
    );

    passwordLength > 0 && passwordLength < 8
      ? (this.shortPassword = true)
      : (this.shortPassword = false);

    if (hasLetters && hasNumbers && hasSymbols && !this.shortPassword) {
      this.easyPassword = false;
      this.mediumPassword = false;
      this.strongPassword = true;
    } else if (
      (hasLetters && (hasNumbers || hasSymbols) && !this.shortPassword) ||
      (hasNumbers && hasSymbols && !this.shortPassword)
    ) {
      this.easyPassword = false;
      this.mediumPassword = true;
      this.strongPassword = false;
    } else if (hasLetters || hasNumbers || hasSymbols) {
      this.easyPassword = true;
      this.mediumPassword = false;
      this.strongPassword = false;
    } else {
      this.easyPassword = false;
      this.mediumPassword = false;
      this.strongPassword = false;
      this.shortPassword = false;
    }
  }
}
