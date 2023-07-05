import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';
import { PasswordService } from 'src/services/password.service';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordIndicatorComponent } from './password-indicator/password-indicator.component';

@NgModule({
  declarations: [AppComponent, FormComponent, PasswordInputComponent, PasswordIndicatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PasswordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
