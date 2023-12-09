import {APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EmployeeListComponent } from './employee-management/employee-list/employee-list.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initKeycloak } from './init-keycloak';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
