import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorDeClique: number = 0;
  public urlImagem: String = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: String = "";

  adicionarClique():void {
    this.contadorDeClique++;
  }

  removerClique():void {
    this.contadorDeClique--;
  }

  /*perdaDeFoco(event:any): void {
    this.nome = event.target.value;
  }*/
}
