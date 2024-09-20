import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ArchivosAccionesComponent } from './archivos-acciones/archivos-acciones.component';
import { ArchivoFormComponent } from './archivo-form/archivo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArchivosAccionesComponent, ArchivoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  
  mostrarFiles: boolean = true;
  mostrarForm: boolean = false;

  // alternar entre components
  alternarVista() {
    this.mostrarFiles = !this.mostrarFiles;
    this.mostrarForm = !this.mostrarForm;
  }
}
