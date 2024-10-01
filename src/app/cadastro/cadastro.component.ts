import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public mensagem: string = ""
  public user: Cliente = new Cliente()

  public gravar(){
    if (this.user.nome != "" && this.user.email != "" && this.user.documento != "" && this.user.telefone != "" && this.user.logradouro != "" 
        && this.user.cep != "" && this.user.cidade != "" && this.user.senha != "" && this.user.confirmar != "") 
      {
     if(this.user.senha === this.user.confirmar) {
      localStorage.setItem("cadastro", JSON.stringify(this.user));
      this.mensagem = "Cadastro atualizado/feito com sucesso!";
     } else {
      this.mensagem = "Senhas diferentes foram inseridas"
     }
    } else {
      this.mensagem = "Preencha todos os campos para realizar o cadastro ou atualizá-lo"
    }
  }
  
  public carregar(){
    let json = localStorage.getItem("cadastro")
    if(json == null){
      window.location.href="./login"
    } else {
      this.user = JSON.parse(json)
    }
  }

  constructor(){
    this.carregar()
  }
}

