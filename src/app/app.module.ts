import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMedicalCartComponent } from './medical-cart/app-medical-cart.component';
import { SidebarComponent } from './sidebar-component/sidebar.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMedicalCartComponent,
    SidebarComponent,
    DashboardComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
