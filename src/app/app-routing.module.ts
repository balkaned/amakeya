
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostulanteComponent } from './pages/postulante/postulante.component';
import { EmpleoComponent } from './pages/empleo/empleo.component';
 


const routes: Routes = [

  {path:'postulante', component:PostulanteComponent},
  {path:'empleo', component:EmpleoComponent},
  
  {path:'**', pathMatch:'full', redirectTo:'postulante'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
