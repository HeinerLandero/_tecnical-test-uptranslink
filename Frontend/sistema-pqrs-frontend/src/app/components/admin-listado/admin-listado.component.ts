import { Component, OnInit } from '@angular/core';
import { PqrsService } from 'src/app/services/pqrs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-listado',
  templateUrl: './admin-listado.component.html'
})
export class AdminListadoComponent implements OnInit {
  lista: any[] = [];
  cargando = true;
  error = '';

  constructor(private pqrsService: PqrsService, private router: Router) {}

  ngOnInit(): void {
    this.pqrsService.getPqrs().subscribe({
      next: (data) => {
        this.lista = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las PQRS.';
        this.cargando = false;
        console.error(err);
      }
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/admin/detalle', id]);
  }
}
