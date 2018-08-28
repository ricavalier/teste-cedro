import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent{

  titModal = 'Confirmação de envio';
  txtModal = "Obrigado por nos enviar o questionário, pois assim poderemos oferecer condições de investimento favoráveis ao seu perfil";
  lblButton = 'Fechar';

  FecharModal() {
    window.location.href = "/inicio";
  }

}
