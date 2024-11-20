import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Todos os produtos"
  public lista: Produto[] = []

  constructor(private service:ProdutoService) {
    this.carregarListaProduto();
  }

  carregarListaProduto(){
    this.service.listarVitrine().subscribe({
      next:(data)=>{
        this.lista = data
        if(this.lista.length <= 0) this.mensagem = "Vitrine Vazia!!!";
      },
      error:(msg)=>(this.mensagem = "Ocorreu erro tente mais tarde!!!!")
    })
  }

  public detalhe(item:Produto){
    window.location.href = `/detalhe/${item.codigo}`;
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
