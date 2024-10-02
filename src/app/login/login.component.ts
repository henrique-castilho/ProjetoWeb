import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  public fazerLogin(){
    if(this.user.email == "usuario@gmail.com" && this.user.senha == "1234") {
      localStorage.setItem("cadastro", JSON.stringify(this.user))
      window.location.href="./cadastro"
    } else {
      this.mensagem = "Email ou senha inválidos!"
      localStorage.removeItem("cadastro")
    }
  }

  public criarCadastro(){
    localStorage.setItem("cadastro", JSON.stringify(this.user))
    window.location.href="./cadastro"
  }
}
