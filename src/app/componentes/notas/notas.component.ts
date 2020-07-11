import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../localstorage/notas.service';
import { Nota } from 'src/app/clases/notas.model';

@Component({
  selector: 'notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  nota: Nota[] = [];
  titulo="";
  descripcion="";
  opti="";
  
  constructor(public notasService: NotasService) { }
  agregarNotass( tit: string, desc: string ){
    if (tit.length > 0 && desc.length > 0){
      this.notasService.crearNota(tit, desc, this.opti);
      this.titulo="";
      this.descripcion="";
      this.opti="";
      
     }
  }
  borrar(){
    this.notasService.borrarNotas();
  }
}