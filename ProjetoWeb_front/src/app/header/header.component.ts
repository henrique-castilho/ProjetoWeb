import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  AbreMenu = false;
  public filtro: string = ''

  constructor(private router: Router) {}

  Buscar() {
    if (this.filtro.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: this.filtro } })
    }
  }


  public Cadastro() {
    window.location.href = "./cadastro";
  }

  public Cesta() {
    window.location.href = "./cesta"
  }

  public Vitrine() {
    window.location.href = "./vitrine"
  }

  public Menu() {
    this.AbreMenu = !this.AbreMenu;
  }
}
