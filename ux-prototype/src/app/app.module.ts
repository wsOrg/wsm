import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from "./component/create-account.component";
import { RentalAgreementComponent } from "./component/rental-agreement.component";

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'create_account', component: CreateAccountComponent },
  { path: 'account_details', component: CreateAccountComponent },
  { path: '', redirectTo:'/rental_agreement',pathMatch:'full' },
  {
    path: 'home',
    component: CreateAccountComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [AppComponent, CreateAccountComponent,RentalAgreementComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
