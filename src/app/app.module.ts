import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

import { QuestionarioService } from './app.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'questionario', component: QuestionarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopUpComponent,
    QuestionarioComponent,
    ConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuestionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
