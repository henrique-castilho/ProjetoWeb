import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  AbreMenu = false;
  title = 'Purely Home';
  
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
