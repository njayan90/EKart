import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
{path : '' , redirectTo :'/dashboard', pathMatch: "full"},
{path : 'dashboard', component : DashboardComponent},
{path:'cart' , component : CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
