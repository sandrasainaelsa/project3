import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HomepageComponent,
    ContactusComponent,
    ArtformComponent,
    SignupComponent,
    LoginComponent,
    
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
