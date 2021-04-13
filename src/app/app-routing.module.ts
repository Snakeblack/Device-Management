import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEntradaComponent } from './page/home-entrada/home-entrada.component';
import { HomeActualizarComponent } from './page/home-actualizar/home-actualizar.component';
import { TableComponent } from './page/table/table.component';


const routes: Routes = [
  {path: 'home-entrada', component: HomeEntradaComponent},
  {path: 'home-actualizar', component: HomeActualizarComponent},
  {path: 'table', component: TableComponent},
  { path: '', redirectTo: '/home-entrada', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
