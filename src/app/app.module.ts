import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { HomeEntradaComponent } from "./page/home-entrada/home-entrada.component";
import { HomeActualizarComponent } from "./page/home-actualizar/home-actualizar.component";
import { TableComponent } from "./page/table/table.component";
import { DispositivosComponent } from "./dispositivos/dispositivos.component";

import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { ToggleDirective } from "./dashboard/sidebar/toggle.directive";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from "src/environments/environment";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotfoundComponent } from './page/notfound/notfound.component';
@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        ToggleDirective,
        HomeEntradaComponent,
        HomeActualizarComponent,
        TableComponent,
        DispositivosComponent,
        ExponentialPipe,
        HighlightDirective,
        NotfoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTooltipModule,
        MatRippleModule,
        CoreModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
