import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent implements OnInit {
  @Input() tarea: any = {};
  @Output() tareaSeleccionada: EventEmitter<number>;
  constructor() {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  cheked(index: number){
     this.tareaSeleccionada.emit(index);
  }


}