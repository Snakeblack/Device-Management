import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeEntradaComponent } from "./page/home-entrada/home-entrada.component";
import { HomeActualizarComponent } from "./page/home-actualizar/home-actualizar.component";
import { TableComponent } from "./page/table/table.component";
import { NotfoundComponent } from "./page/notfound/notfound.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home-entrada"},
    { path: "home-entrada", component: HomeEntradaComponent },
    { path: "home-actualizar", component: HomeActualizarComponent },
    { path: "table", component: TableComponent },
    { path: "404", component: NotfoundComponent },
    { path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
