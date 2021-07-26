import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
