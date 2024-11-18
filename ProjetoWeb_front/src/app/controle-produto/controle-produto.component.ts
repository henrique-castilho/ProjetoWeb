import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-controle-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './controle-produto.component.html',
  styleUrl: './controle-produto.component.css'
})
export class ControleProdutoComponent {
  public mensagem: string = ""
  public produto: Produto = new Produto()

  constructor(private service: ProdutoService) {}
  
  public gravar() {
    this.service.gravar(this.produto).subscribe({
      next: (data: any) => {
        if (data.mensagem.includes('Erro')) {
          this.mensagem = data.mensagem;
        } else {
          this.mensagem = data.mensagem;
          this.limpar();
        }
      },
      error: (err) => {
        console.error(err);
        this.mensagem = "Ocorreu um erro, tente mais tarde!";
      }
    });
  }

  
  public alterar() {
    this.service.alterar(this.produto).subscribe({
      next: (data: any) => {
        if (data.mensagem.includes('Erro')) {
          this.mensagem = data.mensagem;
        } else {
          this.mensagem = data.mensagem;
          this.limpar();
        }
      },
      error: (err) => {
        if (err.error && err.error.mensagem) {
          this.mensagem = err.error.mensagem;
        } else {
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
      }
    });
  }
  
  public carregar(){
    this.service.carregar(this.produto.codigo).subscribe({
      next : (data) => {
        if(data === null) {
          this.mensagem = "Cadastro não encontrado, verifique!";
          this.limpar();

        } else {
          this.produto = data;
          this.mensagem = ""
        }
      },
      error: (err) => {
        this.mensagem = "Ocorreu um erro, tente mais tarde!";
        this.limpar();
      }
    })
  }

  public remover() {
    this.service.remover(this.produto.codigo).subscribe({
        next: (data) => {
            if (data === null) {
                this.mensagem = "Cadastro removido com sucesso!";
            } else {
                this.mensagem = "Produto não encontrado!";
            }
            this.limpar();
        },
        error: (err) => {
            this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
    });
  }

  public limpar(){
    this.produto = new Produto();
  }
}
