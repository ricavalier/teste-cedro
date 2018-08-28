import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  titModal = 'Termo';
  txtModal = "Loren Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, wheb an unknown printer took a gallerry of type and sarambled it to make a type.";
  txtAceite = 'Lí e aceito os termos e condições acima.';
  lblButton = 'Ok, Entendi!';

  NaoQuestionarioFecha() {
    document.getElementById("naoQuest").removeAttribute('style');
    document.getElementById("EnviaNaoQuest").setAttribute('disabled', 'disabled');
  }

  AtivaBotao() {
    document.getElementById("EnviaNaoQuest").removeAttribute('disabled');
  }

  EnviaTermo() {
    document.getElementById("naoQuest").removeAttribute('style');
    document.getElementById("EnviaNaoQuest").setAttribute('disabled', 'disabled');
  }  
}
