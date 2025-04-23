import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent {
  pqrsForm: FormGroup;
  enviado = false;
  mensaje = '';

  tipos = ['Peticion', 'Queja', 'Reclamo', 'Sugerencia'];

  constructor(private fb: FormBuilder, private pqrsService: PqrsService , private router: Router) {
    this.pqrsForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  irInicio() {
    this.router.navigate(['/']);
  }
  enviar() {
    if (this.pqrsForm.invalid) {
      this.pqrsForm.markAllAsTouched();
      return;
    }

    this.pqrsService.createPqrs(this.pqrsForm.value).subscribe({
      next: () => {
        this.enviado = true;
        this.mensaje = 'PQRS enviada correctamente.';
        this.pqrsForm.reset();
      },
      error: (err) => {
        this.mensaje = 'Error al enviar PQRS. Intenta de nuevo.';
        console.error(err);
      }
    });
  }
}
