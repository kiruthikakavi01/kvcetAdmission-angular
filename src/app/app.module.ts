import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgRegistrationComponent } from './pg-registration/pg-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListPgAdmissionComponent } from './list-pg-admission/list-pg-admission.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { MailsendComponent } from './mailsend/mailsend.component';
import { UgRegistrationComponent } from './ug-registration/ug-registration.component';
import { LateralEntryRegistrationComponent } from './lateral-entry-registration/lateral-entry-registration.component';
import { SorryComponent } from './sorry/sorry.component';
import { ListUgAdmissionComponent } from './list-ug-admission/list-ug-admission.component';
import { ListLateralAdmissionComponent } from './list-lateral-admission/list-lateral-admission.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PgRegistrationComponent,
    RegistrationComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListPgAdmissionComponent,
    LoginComponent,
    ThankyouComponent,
    MailsendComponent,
    UgRegistrationComponent,
    LateralEntryRegistrationComponent,
    SorryComponent,
    ListUgAdmissionComponent,
    ListLateralAdmissionComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
