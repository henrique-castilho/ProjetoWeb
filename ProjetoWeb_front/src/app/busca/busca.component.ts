import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem: string = "Todos os produtos"
  public filtro: string = "";
  public lista: Produto[] = [];

  constructor(private service: ProdutoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro = params['q'] || '';
      if (this.filtro) {
        this.buscar(this.filtro);
      }
    });
  }

  public buscar(termoPesquisado: string): void {
    this.service.fazerBusca(termoPesquisado).subscribe({
      next: (data) => this.resultadoBusca(data),
      error: () => this.mensagem = "Ocorreu erro, tente mais tarde!!!!"
    });
  }

  private resultadoBusca(data: Produto[]): void {
    this.lista = data;
    if (this.lista.length <= 0) {
      this.mensagem = `Não foram encontrados produtos com a palavra:<br><br>"${this.filtro}"`;
    } else {
      this.mensagem = `${this.lista.length} registros encontrados!`;
    }
  }

  public get produtosFiltrados(): Produto[] {
    if (!this.filtro) {
      return this.lista;
    }
    const termoFiltrado = this.filtro.toLowerCase();
    return this.lista.filter(produto =>
      produto.keywords.toLowerCase().includes(termoFiltrado)
    );
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
