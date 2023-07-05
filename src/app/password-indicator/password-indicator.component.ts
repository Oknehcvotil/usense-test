import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-indicator',
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.css'],
})
export class PasswordIndicatorComponent {
  @Input() shortPassword: boolean = false;
  @Input() easyPassword: boolean = false;
  @Input() mediumPassword: boolean = false;
  @Input() strongPassword: boolean = false;
}
