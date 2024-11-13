import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueci.component.html',
  styleUrl: './esqueci.component.css'
})
export class EsqueciComponent {
  public mensagem: string = "";
  public user: Cliente = new Cliente();

  public reenviarIntrucoes(){
    if(this.user.email == "") {
      this.mensagem = "O campo email é obrigatorio.";
    } else {
      this.mensagem ="As intruções foram enviadas para o email: " + this.user.email;
    }
  }
}
