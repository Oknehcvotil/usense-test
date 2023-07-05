import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();

  onPasswordChange() {
    this.passwordChange.emit(this.password);
  }
}
