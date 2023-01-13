import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login-page', component: LoginPageComponent
  },
  {
    path: 'signup-page', component: SignupPageComponent
  },
  {
    path: 'items-list', component: ItemsListComponent
  },
  {
    path: 'view-restuarant/:id', component: ViewRestuarantComponent
  },
  {
    path: 'food-cart', component: FoodCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
