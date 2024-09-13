import { Component, EventEmitter, Output } from '@angular/core';
import { ArchivosMostrarComponent } from '../archivos-mostrar/archivos-mostrar.component';
import { ArchivoFormComponent } from '../archivo-form/archivo-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-archivos-acciones',
  standalone: true,
  imports: [ArchivosMostrarComponent, ArchivoFormComponent],
  templateUrl: './archivos-acciones.component.html',
  styleUrl: './archivos-acciones.component.css'
})
export class ArchivosAccionesComponent {

  @Output() onNuevoArchivo = new EventEmitter<boolean>;
  btnNuevoArchivo(){
    this.onNuevoArchivo.emit(false)
  }

  btnDeleteFilesClicked: boolean = false;
  btnBorrarArchivos(){
    this.btnDeleteFilesClicked = true;
  }

  resetBtnDeleteFiles($event: boolean) {
    this.btnDeleteFilesClicked = false;
  }
}
