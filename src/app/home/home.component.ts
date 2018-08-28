import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img = '../assets/image/icoInfoRecebidas.png';
  imgTitle = 'Informações Recebidas!';
  text1 = 'Em até 48h daremos um retorno sobre a abertura de sua conta.';
  text2 = 'Para receber nossas recomendações de investimentos e começar a investir, precisamos conhecer seu perfil de investidor.'
  text3 = 'São apenas 4 perguntas que irão guiar as suas decisões de investimentos';
  text4 = 'Gostaria de respoder ao perfildo investidor?';

  ngOnInit() {
  }

  NaoQuestionario() {
  	document.querySelector("#naoQuest").setAttribute('style', 'display:flex');
  }

  Questionario() {
  	window.location.href = "/questionario";
  }

}


