import { Component } from '@angular/core';
import { PqrsService } from 'src/app/services/pqrs.service';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html'
})
export class ClienteConsultaComponent {
  email: string = '';
  resultados: any[] = [];
  error: string = '';
  buscando = false;

  constructor(private pqrsService: PqrsService) { }

  buscar() {
    this.buscando = true;
    this.error = '';
    this.resultados = [];

    if (!this.email) {
      this.error = 'Por favor, introduce tu email.';
      this.buscando = false;
      return;
    }

    this.pqrsService.getPqrsByEmail(this.email).subscribe({
      next: (data) => {
        this.resultados = data;
        this.buscando = false;
        if (data.length === 0) {
          this.error = 'No se encontraron registros para este correo.';
        }
      },
      error: (err) => {
        this.error = 'Error al buscar PQRS.';
        this.buscando = false;
        console.error(err);
      }
    });
  }
}
