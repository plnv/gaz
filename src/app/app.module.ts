import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule, MatTabsModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SetAddComponent } from './set/set-add/set-add.component';
import { SetComponent } from './set/set/set.component';
import { ParamComponent } from './param/param/param.component';
import { ParamAddComponent } from './param/param-add/param-add.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'set', pathMatch: 'full'
  },
  {
    path: 'set',
    component: SetComponent,
  },
  {
    path: 'param',
    component: ParamComponent,
  },
];


const MATERIAL = [
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule
];


@NgModule({
  declarations: [
    AppComponent,
    SetComponent,
    SetAddComponent,
    ParamComponent,
    ParamAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ...MATERIAL,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SetAddComponent, ParamAddComponent]
})
export class AppModule {
}
