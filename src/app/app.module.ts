import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   MatInputModule,
//   MatCardModule,
//   MatButtonModule,
//   MatToolbarModule,
//   MatExpansionModule,
//   MatProgressSpinnerModule,
//   MatSelectModule,
//   MatMenuModule,
//   MatDividerModule,
//   MatGridListModule,
//   MatDialogModule,
//   MatPaginatorModule,
//   MatTabsModule,
//   MatSidenavModule,
//   MatListModule, 
//   MatIconModule,
//   MatButtonToggleModule,
//   MatAutocompleteModule
// } from "@angular/material";

import {
  MatInputModule,
} from "@angular/material/input";

import {
  MatFormFieldModule,
} from "@angular/material/form-field";

import {
  MatButtonModule,
} from "@angular/material/button";

import {
  MatRadioModule
} from '@angular/material/radio';

import { LayoutModule } from '@angular/cdk/layout';
import { LogoNavComponent } from './logo-nav/logo-nav.component';
import { PaginformacionComponent } from './paginformacion/paginformacion.component';
import { ParocardiacoComponent } from './parocardiaco/parocardiaco.component';

const appRoutes: Routes = [
  { path: '', component: PagPrincipalComponent },
  { path: 'paginformacion', component: PaginformacionComponent },
  { path: 'parocardiaco', component: ParocardiacoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    LogoNavComponent,
    PaginformacionComponent,
    ParocardiacoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatRadioModule,
    // MatCardModule,
    MatButtonModule,
    // MatToolbarModule,
    // MatExpansionModule,
    // MatProgressSpinnerModule,
    // MatSelectModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatGridListModule,
    // MatDialogModule,
    // MatPaginatorModule,
    // MatTabsModule,
    // MatSidenavModule,
    // MatListModule, 
    // MatIconModule,
    // MatButtonToggleModule,
    // MatAutocompleteModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
