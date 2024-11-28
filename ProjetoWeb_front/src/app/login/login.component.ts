import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: string = "Preencha o email e senha para fazer login:"
  public user: Cliente = new Cliente()

  constructor(private service: ClienteService){}

  public fazerLogin() {
    this.service.fazerLogin(this.user).subscribe({
      next: (data) => {
        if (data.mensagem) {
          this.mensagem = data.mensagem;
        } else {
          this.user = data;
          if (this.user.codigo) {
            localStorage.setItem("cliente", JSON.stringify(this.user));
            localStorage.setItem("loginMessage", `Bem-vindo, ${this.user.nome}!`);
            window.location.href = "./vitrine";
          } else {
            this.mensagem = "Email ou senha inválidos!";
          }
        }
      },
      error: (msg) => {
        this.mensagem = "Ocorreu um erro, tente novamente!";
      }
    });
  }

  public criarCadastro(){
    localStorage.setItem("cadastro", JSON.stringify(this.user))
    window.location.href="./cadastro"
  }
}
