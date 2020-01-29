import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
{path : 'dashboard', component : DashboardComponent},
{path:'cart' , component : CartComponent},
{path : 'login' , component : LoginComponent},
{path : 'signup', component : SignUpComponent},
{path : '' , redirectTo :'/login', pathMatch: "full"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
