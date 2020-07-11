import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareasService } from '../../localstorage/tareas.service';
import { Tarea } from 'src/app/clases/tareas.model';

@Component({
  selector: 'ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent implements OnInit {
  tarea: Tarea[];
  @Output() tareaSeleccionada: EventEmitter<Tarea>
  constructor(public tareasService: TareasService) {
    this.tareaSeleccionada=new EventEmitter();
   }

  ngOnInit(): void {
  }
  cheked(tarea: Tarea){

    this.tareaSeleccionada.emit(tarea);
  }

}
