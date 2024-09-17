import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileOwner, FileType, } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FileItemService } from '../services/file-item.service';

@Component({
  selector: 'app-archivo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './archivo-form.component.html',
  styleUrl: './archivo-form.component.css'
})
export class ArchivoFormComponent {
  //service
  private fileService = inject(FileItemService);
  // agarra solo los nombres del enum
  fileTypes = Object.keys(FileType).filter(key => isNaN(Number(key))); 
  //agarra solo los fileItems del tipo FOLDER
  fileFolders = FILE_LIST.filter(x => x.type === FileType.FOLDER);
  //list de Owners
  ownersList: FileOwner[] = OWNERS;

  //lista de owners, q al hacer submit, se asignaran al fileItem
  fileOwnersDinamyc: FileOwner[] = [{
    name: undefined,
    avatarUrl: undefined,
  }];

  fileItem: FileItem = {
    id: "",
    name: "",
    creation: undefined,
    owners: [],
    type: undefined,
    parentId: ""
  };

  //completar
  // select dinámico
  mostrarDuenioExtra() {
    this.fileOwnersDinamyc.push({ name: undefined, avatarUrl: undefined });
  }

  @Output() onVolver = new EventEmitter<boolean>;
  volver(){
    this.onVolver.emit(true)
  }

  @Output() onFileItemCreated = new EventEmitter<FileItem>;
  guardarForm(form: NgForm){
    if(form.valid){
      this.fileItem.id = Math.random().toString();

      // Set q almacena los name unicos
      const uniqueOwners = new Set<string>();

      // filtra los owners q si tienen name y no esta repetido
      const validOwners = this.fileOwnersDinamyc.filter(owner => {
        if (owner.name !== undefined && !uniqueOwners.has(owner.name)) {
          uniqueOwners.add(owner.name); 
          return true; 
        }
        return false;
      });

      // asigna los owners validos al fileItem.owners
      this.fileItem.owners = validOwners;      
      
      console.log(this.fileItem);

      //this.onFileItemCreated.emit(this.fileItem);
      this.fileService.add(this.fileItem);
      this.volver();
    }
  }
}
