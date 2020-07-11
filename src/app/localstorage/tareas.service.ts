import { Injectable } from '@angular/core';
import { Tarea } from '../clases/tareas.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
    constructor(){
        this.MostrarStorage();
    }
  Tarea: Tarea[] = [];
  agregarTarea( termino: string ){
    if (termino.length > 0){
      const index = this.Tarea.length + 1;
      const tareaAux = new Tarea(termino, index);
      this.Tarea.push(tareaAux);
    }
    this.guardaStorage();
  }
  
    borrar(){
        this.Tarea.splice(0, this.Tarea.length);
        this.guardaStorage();
    }
    
  guardaStorage(){
    localStorage.setItem('Tarea', JSON.stringify(this.Tarea));
    console.log(this.Tarea);
  }
  MostrarStorage(){
    if ( localStorage.getItem('Tarea') ){
      this.Tarea = JSON.parse(localStorage.getItem('Tarea'));
    }else
    {
      this.Tarea = [];
    }
  }
}
