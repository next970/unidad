import { Component, Input} from '@angular/core';
import { NotasService } from '../../localstorage/notas.service';
import { Nota } from 'src/app/clases/notas.model';

@Component({
  selector: 'agregar',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent {
  nota: Nota[] = [];
  constructor(public notaService: NotasService ) { }
}
