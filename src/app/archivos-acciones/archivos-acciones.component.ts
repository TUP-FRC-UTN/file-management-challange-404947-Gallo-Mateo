import { Component } from '@angular/core';
import { ArchivosMostrarComponent } from '../archivos-mostrar/archivos-mostrar.component';
import { ArchivoFormComponent } from '../archivo-form/archivo-form.component';

@Component({
  selector: 'app-archivos-acciones',
  standalone: true,
  imports: [ArchivosMostrarComponent, ArchivoFormComponent],
  templateUrl: './archivos-acciones.component.html',
  styleUrl: './archivos-acciones.component.css'
})
export class ArchivosAccionesComponent {

}
