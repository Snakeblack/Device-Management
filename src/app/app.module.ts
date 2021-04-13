import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ToggleDirective } from './dashboard/sidebar/toggle.directive';
import { HomeEntradaComponent } from './page/home-entrada/home-entrada.component';
import { HomeActualizarComponent } from './page/home-actualizar/home-actualizar.component';
import { TableComponent } from './page/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToggleDirective,
    HomeEntradaComponent,
    HomeActualizarComponent,
    TableComponent
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
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
