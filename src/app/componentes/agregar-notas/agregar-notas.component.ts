import { Component, Input} from '@angular/core';

@Component({
  selector: 'agregar',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent {

  @Input() nota: any = {};
  constructor() { }


}
