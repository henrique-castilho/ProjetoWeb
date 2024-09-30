import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent {
  public mensagem: string ="";
  public item: Produto = new Produto();
  constructor(){
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);
    } else {
      this.mensagem = "Produto não encontrado!"
    }
  }

  public adicionaCarrinho(item: Produto) {
    const confirmacao = window.confirm("Você deseja adicionar este produto ao carrinho?");
  
    if (confirmacao) {
      let cesta = JSON.parse(localStorage.getItem("cesta") || '[]');
      cesta.push(item);
      localStorage.setItem("cesta", JSON.stringify(cesta));
      alert("Produto adicionado ao carrinho com sucesso!");
    } else {
      alert("Ação cancelada!");
    }
  }
}