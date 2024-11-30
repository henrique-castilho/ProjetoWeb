import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

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

  constructor(private service: ClienteService, private router: Router){}

  public reenviarIntrucoes(){
    if (this.user.email === "") {
      this.mensagem = "Preencha o campo e-mail.";
    } else {
      this.service.esqueciSenha(this.user).subscribe({
        next: (response: any) => {
          if (response.token) {
            this.router.navigate(['/redefine-senha'], { 
              queryParams: { email: this.user.email, token: response.token } 
            });
          } else {
            this.mensagem = response.mensagem || "Erro desconhecido.";
          }
        },
        error: (err) => {
          if (err.status === 404) {
            this.mensagem = err.error.mensagem || "E-mail não encontrado, verifique!!";
          } else {
            this.mensagem = "Erro ao processar a solicitação.";
          }
          console.error(err);
        }
      });
    }
  }
}
