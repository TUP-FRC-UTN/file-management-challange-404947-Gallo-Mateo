import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-archivo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './archivo-form.component.html',
  styleUrl: './archivo-form.component.css'
})
export class ArchivoFormComponent {
  emptyFileOwnersList: FileOwner[] = [
    { name: '', avatarUrl: ''}
  ];

  fileItem: FileItem = {
    id: "",
    name: "",
    creation: new Date(),
    owners: this.emptyFileOwnersList,
    type: FileType.FILE,
    parentId: ""
  };

  //completar
  saveForm(form: NgForm){

  }

  mostrarDuenioExtra(){

  }

  volver(){

  }

  guardarForm(){
    
  }
}
