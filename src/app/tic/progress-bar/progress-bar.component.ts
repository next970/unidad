import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'barss',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent{
  @Input() nombre:string;
  @Output() saludar: EventEmitter<String> = new EventEmitter<String>();
  
  public nombres: Array<String>= [];
  public nombrelista: string= "";
  constructor() { 

  }
  
  onClick(){
    this.saludar.emit('Hola desde el componente hijo!');
  }
  onButtonClick(){
    this.nombres.push(this.nombrelista);
    this.nombrelista= '';
    console.log(this.nombres);
  }
  
}
