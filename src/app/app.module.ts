import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemsListComponent } from './items-list/items-list.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { PipePipe } from './filter/pipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    SignupPageComponent,
    ItemsListComponent,
    ViewRestuarantComponent,
    FoodCartComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
