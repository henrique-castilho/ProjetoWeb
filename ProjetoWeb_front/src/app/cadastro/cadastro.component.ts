import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

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
  
  public limpar(){
    this.user = new Cliente();
  }
}
