import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministrativeComponent } from './administrative/administrative.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"administrative", component:AdministrativeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
