import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(private router: Router) {}

  irAdmin() {
    this.router.navigate(['/admin']);
  }

  irCliente(opcion: string) {
    if (opcion === 'consultar') {
      this.router.navigate(['/consultar']);
    } else if (opcion === 'crear') {
      this.router.navigate(['/nuevo']);
    }
  }
}
