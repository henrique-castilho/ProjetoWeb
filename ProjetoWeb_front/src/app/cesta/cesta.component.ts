import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json!=null) {
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Carrinho sem itens, adicione novos itens!";
    }
  }

  public excluiItens(obj:Item) {
    this.cesta.itens = this.cesta.itens.filter(item => item != obj);
    this.cesta.total = 0;
    for(let i=0; i<this.cesta.itens.length; i++){
      this.cesta.total = this.cesta.itens[i].valor+this.cesta.total;
    }
    console.log(this.cesta);
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }

  public esvaziaCarrinho(){
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Carrinho sem itens, adicione novos itens!";
  }
}
