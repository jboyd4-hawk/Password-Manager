import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CredentialFormComponent} from './credential-form/credential-form.component';
import {CredentialsComponent} from './credentials/credentials.component';

const routes: Routes = [
  { path: '', component: CredentialsComponent },
  { path: 'form', component: CredentialFormComponent },
  { path: 'credential-form', component: CredentialFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
