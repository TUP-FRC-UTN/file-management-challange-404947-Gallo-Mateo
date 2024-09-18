import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule, DatePipe } from '@angular/common';
import { FileOwner, FileItem, FileType } from '../../models/file.item.model';
import { FormsModule } from '@angular/forms';
import { FileItemService } from '../services/file-item.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-archivos-mostrar',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './archivos-mostrar.component.html',
  styleUrl: './archivos-mostrar.component.css'
})
export class ArchivosMostrarComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    this.fileList = this.fileService.getAll();  
  }
  
  //service
  private fileService = inject(FileItemService);
  //lista de files (del service)
  fileList : FileItem[] = [];
  //tipos de File
  typeFile = FileType.FILE;
  typeFolder = FileType.FOLDER;

  //resetea este campo en el component padre para poder borrar de nuevo
  @Output() resetBtnDeleteFilesClicked = new EventEmitter<boolean>;

  @Input() deleteFiles: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (this.deleteFiles && this.filesToDelete?.length) {
      // si la cant de elementos a borrar es mayor a 1, muestra la alerta pidiendo confirmacion
      if (this.filesToDelete.length > 1) {
        Swal.fire({
          title: '¿Está seguro?',
          text: 'Está a punto de eliminar varios archivos, esta acción no se puede deshacer!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            //console.log("Antes:" ,this.fileService); //confirmo, ahora borra de nuevo
            //se borran los fileItems en el array del Service
            this.fileService.delete(this.filesToDelete);
            //se devuelve el array modificado
            this.fileList = this.fileService.getAll();  
            //console.log("DEspues:" ,this.fileService); //confirmo, ahora borra de nuevo

            // se resetea el atributo en el component padre y se limpia la lista de Files a borrar
            this.resetBtnDeleteFilesClicked.emit(false);
            this.deleteFiles = false;
            this.filesToDelete = [];
          } else {
            this.deleteFiles = false;
          }
        });
      } else {
        // un solo archivo, se elimina sin preguntar
        //se borra el fileItem en el array del Service
        this.fileService.delete(this.filesToDelete);
        //se devuelve el array modificado
        this.fileList = this.fileService.getAll(); 

        // se resetea el atributo en el component padre y se limpia la lista de Files a borrar
        this.resetBtnDeleteFilesClicked.emit(false);
        this.deleteFiles = false;
        this.filesToDelete = [];
      }
    }
  }

  filesToDelete: string[] | undefined;
  agregarOQuitar(idFile: string) {
    if (!this.filesToDelete) {
      this.filesToDelete = [];
    }
  
    const index = this.filesToDelete.indexOf(idFile);
  
    if (index === -1) {
      this.filesToDelete.push(idFile);
    } else {
      this.filesToDelete.splice(index, 1);
    }
    //para corroborar
    console.log(this.filesToDelete);
  }
}
