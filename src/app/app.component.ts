import { Component } from '@angular/core';

@Component({
  selector: 'ny-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prac1';
  name= 'eduardo';

  onSaludar(mensaje){
    console.log(mensaje);
  }

  //valida(texto:string){
   // return{
      //'weal': texto.length < 4,
     // 'medium': texto.length >=4 && texto.length <=7,
     // 'strong': texto.length > 7
  //  }
  //}
  valida(texto:string){
    return{
      'progress-bar bg-danger': texto.length < 4,
      'progress-bar progress-bar-striped bg-warning': texto.length >=4 && texto.length <=7,
     'progress-bar bg-success': texto.length > 7
    }
  }
  
}
