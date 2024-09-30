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
  public obj: Cliente = new Cliente();

  public reenviarIntrucoes(){
    if(this.obj.email === "") {
      this.mensagem = "O campo e-mail é obrigatorio.";
    } else {
      this.mensagem ="as intruções foram enviadas para o e-mail: " + this.obj.email;
    }
  }
}
