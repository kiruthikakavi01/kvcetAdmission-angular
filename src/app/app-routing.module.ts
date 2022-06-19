import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LateralEntryRegistrationComponent } from './lateral-entry-registration/lateral-entry-registration.component';
import { ListPgAdmissionComponent } from './list-pg-admission/list-pg-admission.component';
import { LoginComponent } from './login/login.component';
import { MailsendComponent } from './mailsend/mailsend.component';
import { PgRegistrationComponent } from './pg-registration/pg-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UgRegistrationComponent } from './ug-registration/ug-registration.component';

const routes: Routes = [
  {path:'pg-registration',component:PgRegistrationComponent},
  {path:'ug-registration',component:UgRegistrationComponent},
  {path:'lateral-entry-registration',component:LateralEntryRegistrationComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'list-pg-admission',component:ListPgAdmissionComponent},
  {path:'login',component:LoginComponent},
  {path:'mailsend',component:MailsendComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'',redirectTo:'registration',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
