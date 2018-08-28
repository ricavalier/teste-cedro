import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuestionarioService } from '../app.service';
import { ConfirmacaoComponent } from '../confirmacao/confirmacao.component';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent {

  title = 'Perfil do Investidor - Questionário';

  pid1 = 1;
  p1 = 'Qual o seu comportamento em relação aos seus investimentos?';
  p1rid1 = 1;
  p1r1 = 'Preservar meu dinheiro sem correr riscos';
  p1rid2 = 2;
  p1r2 = 'Ganhar mais dinheiro assumindo riscos moderados';
  p1rid3 = 3;
  p1r3 = 'Ganhar mais dinheiro assumindo riscos agressivos';

  pid2 = 2;
  p2 = 'Por quanto tempo você deseja manter os seus investimentos?';
  p2rid1 = 1;
  p2r1 = 'Até 1 ano';
  p2rid2 = 2;
  p2r2 = 'De 1 a 3 anos';
  p2rid3 = 3;
  p2r3 = 'mais de 3 anos';

  pid3 = 3;
  p3 = 'Quantos % desses investimentos você pode precisar em 1 ano?';
  p3rid1 = 1;
  p3r1 = 'Acima de 75%';
  p3rid2 = 2;
  p3r2 = 'De 26% à 74%';
  p3rid3 = 3;
  p3r3 = 'Até 25%'

  pid4 = 4;
  p4 = 'Qual sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos ultimos 2 anos.'
  p4rid1 = 1;
  p4r1 = 'Títulos de Renda Fixa ou Tesouro Direto';
  p4rid2 = 2;
  p4r2 = 'Fundo de investimento';
  p4rid3 = 3;
  p4r3 = 'Ações a vista';
  p4rid4 = 4;
  p4r4 = 'Aluguel de ações, termos, opções e futuro';

  Voltar() {
    window.location.href = "/";
  }
  Salvar() {
    document.querySelector("#msg").setAttribute('style', 'display:flex');
  }
  
}
