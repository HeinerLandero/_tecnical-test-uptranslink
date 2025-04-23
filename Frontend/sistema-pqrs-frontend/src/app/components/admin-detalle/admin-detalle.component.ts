import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs.service';

@Component({
  selector: 'app-admin-detalle',
  templateUrl: './admin-detalle.component.html'
})
export class AdminDetalleComponent implements OnInit {
  pqrs: any;
  id!: number;
  cargando = true;
  guardando = false;
  mensaje = '';
  error = '';
  estados = ['Pendiente', 'En proceso', 'Resuelto'];

  constructor(
    private route: ActivatedRoute,
    private pqrsService: PqrsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarPqrs();
  }

  cargarPqrs() {
    this.pqrsService.getPqrs().subscribe({
      next: (data) => {
        const encontrado = data.find((p: any) => p.id === this.id);
        if (encontrado) {
          this.pqrs = encontrado;
        } else {
          this.error = 'PQRS no encontrada.';
        }
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al cargar datos.';
        this.cargando = false;
      }
    });
  }
  irInicio() {
    this.router.navigate(['/']);
  }

  guardar() {
    this.guardando = true;
    const datos = {
      estado: this.pqrs.estado,
      respuesta: this.pqrs.respuesta
    };

    this.pqrsService.updatePqrs(this.id, datos).subscribe({
      next: () => {
        this.mensaje = 'Cambios guardados correctamente.';
        this.guardando = false;
      },
      error: () => {
        this.error = 'Error al guardar cambios.';
        this.guardando = false;
      }
    });
  }
}
