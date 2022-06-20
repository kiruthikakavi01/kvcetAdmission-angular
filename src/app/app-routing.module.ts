import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { LateralEntryRegistrationComponent } from './lateral-entry-registration/lateral-entry-registration.component';
import { ListLateralAdmissionComponent } from './list-lateral-admission/list-lateral-admission.component';
import { ListPgAdmissionComponent } from './list-pg-admission/list-pg-admission.component';
import { ListUgAdmissionComponent } from './list-ug-admission/list-ug-admission.component';
import { LoginComponent } from './login/login.component';
import { MailsendComponent } from './mailsend/mailsend.component';
import { PgRegistrationComponent } from './pg-registration/pg-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { SorryComponent } from './sorry/sorry.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UgRegistrationComponent } from './ug-registration/ug-registration.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'pg-registration',component:PgRegistrationComponent},
  {path:'ug-registration',component:UgRegistrationComponent},
  {path:'lateral-entry-registration',component:LateralEntryRegistrationComponent},
  {path:'list-ug-admission',component:ListUgAdmissionComponent,canActivate:[AuthguardGuard]},
  {path:'list-lateral-admission',component:ListLateralAdmissionComponent,canActivate:[AuthguardGuard]},
  {path:'list-pg-admission',component:ListPgAdmissionComponent,canActivate:[AuthguardGuard]},
  {path:'login',component:LoginComponent},
  {path:'mailsend',component:MailsendComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'sorry',component:SorryComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'',redirectTo:'registration',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
