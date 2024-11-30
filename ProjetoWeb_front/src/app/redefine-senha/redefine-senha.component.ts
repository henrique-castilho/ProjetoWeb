import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-redefine-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './redefine-senha.component.html',
  styleUrl: './redefine-senha.component.css'
})
export class RedefineSenhaComponent {
  public email: string = "";
  public novaSenha: string = "";
  public token: string = "";
  public mensagem: string = "";

  constructor( private service: ClienteService, private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
      this.token = params['token'] || '';
    });
  }

  public redefinir() {
    if (!this.novaSenha) {
      this.mensagem = "Digite a sua nova senha.";
      return;
    }
    this.service.redefinirSenha(this.email, this.novaSenha, this.token).subscribe({
      next: () => {
        this.mensagem = "Senha redefinida com sucesso!";        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: (err) => {
        this.mensagem = "Erro ao redefinir a senha.";
        console.error(err);
      }
    });
  }
}
