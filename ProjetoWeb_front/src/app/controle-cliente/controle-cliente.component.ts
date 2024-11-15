import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-controle-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './controle-cliente.component.html',
  styleUrl: './controle-cliente.component.css'
})
export class ControleClienteComponent {
  public mensagem: string = ""
  public user: Cliente = new Cliente()

  constructor(private service: ClienteService){}
  
  public gravar() {
    this.service.gravar(this.user).subscribe({
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
    this.service.alterar(this.user).subscribe({
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
    this.service.carregar(this.user.codigo).subscribe({
      next : (data) => {
        if(data === null) {
          this.mensagem = "Cadastro não encontrado, verifique!";
          this.limpar();

        } else {
          this.user = data;
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
    this.service.remover(this.user.codigo).subscribe({
        next: (data) => {
            if (data === null) {
                this.mensagem = "Cadastro removido com sucesso!";
            } else {
                this.mensagem = "Cliente não encontrado";
            }
            this.limpar();
        },
        error: (err) => {
            this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
    });
  }

  public limpar(){
    this.user = new Cliente();
  }
}
