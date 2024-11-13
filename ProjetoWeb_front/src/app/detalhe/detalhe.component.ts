import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

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

  public adicionaCarrinho(obj: Produto) {
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cadastro")
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
    if(json==null) {
      item.codigo = obj.codigo;
      item.produto= obj;
      item.quantidade=1;
      item.valor = obj.valor
      cesta.codigo = 1;
      cesta.total = obj.valor;
      cesta.itens.push(item);
      if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);
    } else {
      let achou = false
      cesta = JSON.parse(json);
      for(let i=0; i<cesta.itens.length; i++){
        if(cesta.itens[i].codigo == obj.codigo) {
          cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
          achou = true
          break
        }
      }
      if (!achou) {
        item.codigo = obj.codigo;
        item.produto= obj;
        item.quantidade=1;
        item.valor = obj.valor
        cesta.itens.push(item);
      }
    }

    cesta.total = 0;
    for(let i=0; i<cesta.itens.length; i++){
      cesta.total = cesta.itens[i].valor + cesta.total;
    }
    localStorage.setItem("cesta", JSON.stringify(cesta));
    window.location.href="./cesta"
  }
}