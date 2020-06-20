import { callbackify } from 'util';
import { Component, OnInit, EventEmitter, Output, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {
  //@ViewChild("form") form;
  @Output() submit_form= new EventEmitter<FormGroup>();
  registro:FormGroup;
  error:boolean;
  animal={};

  persona={id:0,name:"",masculino:false,femenino:false,anio:0};
  constructor(public _fb:FormBuilder) { }

  ngOnInit(): void {
    this.registro=this._fb.group({
      id:["",[Validators.required,Validators.pattern('/^[1-9]\d{6,10}$/')]],
      name:[""],
      masculino:false,
      femenino:false,
      anio:[""]
    })
    //this.array.push(this.item);
  }
  on_Submit(){
    /*this.submit_form.emit(this.registro);
    */
   alert('Valido')
   console.log(this.registro.value);
    this.persona=this.registro.value;
    if(this.persona.id>=100 && this.persona.id<=105){
      this.error=false;
    }else{
      this.error=true;
    }

    if(this.persona.anio>=1019800 && this.persona.anio<=210){
      this.error=false;
    }else{
      this.error=true;
    }
  }
}