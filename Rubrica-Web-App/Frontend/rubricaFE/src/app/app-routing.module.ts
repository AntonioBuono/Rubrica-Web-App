import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContattiComponent } from './Components/lista-contatti/lista-contatti.component';
import { ModificaContattoComponent } from './Components/modifica-contatto/modifica-contatto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-contatti',
    pathMatch: 'full',
  },

  {
    path: 'lista-contatti',
    component: ListaContattiComponent,
  },
  {
    path: 'modifica-contatto/:id',
    component: ModificaContattoComponent,
  },
  {
    path: 'modifica-contatto',
    component: ModificaContattoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
