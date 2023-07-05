import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  checkPassword(password: string): any {
    const result = {
      shortPassword: false,
      easyPassword: false,
      mediumPassword: false,
      strongPassword: false,
    };

    const passwordLength = password.length;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    if (passwordLength > 0 && passwordLength < 8) {
      result.shortPassword = true;
    }

    if (hasLetters && hasNumbers && hasSymbols && !result.shortPassword) {
      result.strongPassword = true;
    } else if (
      (hasLetters && (hasNumbers || hasSymbols) && !result.shortPassword) ||
      (hasNumbers && hasSymbols && !result.shortPassword)
    ) {
      result.mediumPassword = true;
    } else if (hasLetters || hasNumbers || hasSymbols) {
      result.easyPassword = true;
    }

    return result;
  }
}
