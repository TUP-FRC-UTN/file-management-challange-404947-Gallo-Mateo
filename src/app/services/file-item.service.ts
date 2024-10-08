import { Injectable } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { FileItem, FileType } from '../../models/file.item.model';

@Injectable({
  providedIn: 'root'
})
export class FileItemService {

  fileList = FILE_LIST.sort((a: FileItem, b: FileItem) => {
    // compara primero por type (FOLDER va antes que FILE)
    if (a.type === FileType.FOLDER && b.type === FileType.FILE) {
      return -1; 
    } else if (a.type === FileType.FILE && b.type === FileType.FOLDER) {
      return 1; 
    }
  
    // else, ordena por orden alfabetico
    return a.name.localeCompare(b.name);
  }); 

  constructor() { }

  getAll(): FileItem[] {
    return [
      ...this.fileList 
    ];
  }

  getAllFolders(): FileItem[] {
    return [
      ...this.fileList.filter(x => x.type === FileType.FOLDER)
    ];
  }

  delete(filesToDelete: string[] | undefined) {
    this.fileList = this.fileList.filter(file => !filesToDelete?.includes(file.id));

    this.fileList.sort((a: FileItem, b: FileItem) => {
      // compara primero por type (FOLDER va antes que FILE)
      if (a.type === FileType.FOLDER && b.type === FileType.FILE) {
        return -1; 
      } else if (a.type === FileType.FILE && b.type === FileType.FOLDER) {
        return 1; 
      }
    
      // else, ordena por orden alfabetico
      return a.name.localeCompare(b.name);
    }); 
  }

  add(file: FileItem) {
    this.fileList.push(file);

    this.fileList.sort((a: FileItem, b: FileItem) => {
      // compara primero por type (FOLDER va antes que FILE)
      if (a.type == FileType.FOLDER && b.type == FileType.FILE) {
        return -1; 
      } else if (a.type == FileType.FILE && b.type == FileType.FOLDER) {
        return 1; 
      }
    
      // else, ordena por orden alfabetico
      return a.name.localeCompare(b.name);
    }); 
  }
}
