import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistacardComponent } from "../app/vistacard/vistacard.component";
import { ListaComponent } from "../app/lista/lista.component";
import { AdicionarComponent } from "../app/adicionar/adicionar.component";
const routes: Routes = [
  {path: "vistacard", component: VistacardComponent},
  {path: "lista", component: ListaComponent},
  {path: "adicionar", component: AdicionarComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
