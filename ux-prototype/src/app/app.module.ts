import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from "./component/create-account.component";

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'create_account', component: CreateAccountComponent },
  { path: 'account_details', component: CreateAccountComponent },
  {
    path: 'home',
    component: CreateAccountComponent
  },
  {
    path: '',
    redirectTo: '/create_account',
    pathMatch: 'full'
  }
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
  declarations: [AppComponent, CreateAccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
