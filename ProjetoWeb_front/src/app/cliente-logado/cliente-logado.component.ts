import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-cliente-logado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-logado.component.html',
  styleUrl: './cliente-logado.component.css'
})

export class ClienteLogadoComponent {
  public mensagem: string = ""
  public user: Cliente = new Cliente()

  constructor(private service: ClienteService){}
  ngOnInit(): void {
    const clienteSalvo = localStorage.getItem("cliente");
    if (clienteSalvo) {
      this.user = JSON.parse(clienteSalvo);
    }
  }

  public alterar() {
    this.service.alterar(this.user).subscribe({
      next: (data: any) => {
        if (data.mensagem.includes('Erro')) {
          this.mensagem = data.mensagem;
        } else {
          this.mensagem = data.mensagem;
          localStorage.setItem("cliente", JSON.stringify(this.user));
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
  
  public sair(){
    localStorage.clear();
    this.mensagem = "LogOut feito. Até mais!!"
    this.user = new Cliente();
    alert("LogOut feito. Até mais!!")
    window.location.href="./vitrine"
  }

  public excluirConta(){
    this.service.remover(this.user.codigo).subscribe({
      next: (data) => {
          if (data === null) {
              this.mensagem = "Cadastro removido com sucesso!";
              localStorage.clear();
              this.user = new Cliente();
              alert("Cadastro removido com sucesso!")
              window.location.href="./cadastro"
          } else {
              this.mensagem = "Cliente não encontrado";
          }
      },
      error: (err) => {
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
      }
  });
  }
}
