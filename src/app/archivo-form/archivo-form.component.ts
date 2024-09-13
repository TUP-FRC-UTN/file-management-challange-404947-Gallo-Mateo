import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileOwner, FileType, } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-archivo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './archivo-form.component.html',
  styleUrl: './archivo-form.component.css'
})
export class ArchivoFormComponent {
  // agarra solo los nombres del enum
  fileTypes = Object.keys(FileType).filter(key => isNaN(Number(key))); 
  //agarra solo los fileItems del tipo FOLDER
  fileFolders = FILE_LIST.filter(x => x.type === FileType.FOLDER);
  //list de Owners
  ownersList: FileOwner[] = OWNERS;

  fileOwnersDinamyc: FileOwner[] | undefined;

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
    //this.fileOwnersList.push({ name: '', avatarUrl: '' });
  }

  @Output() onVolver = new EventEmitter<boolean>;
  volver(){
    this.onVolver.emit(true)
  }

  guardarForm(form: NgForm){
    if(form.valid){
      this.fileItem.id = Math.random().toString();
      console.log(this.fileItem, " | ", this.fileItem.owners);
    }
  }
}
