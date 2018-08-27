import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { QuestionarioComponent } from './questionario/questionario.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questionario', component: QuestionarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopUpComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
