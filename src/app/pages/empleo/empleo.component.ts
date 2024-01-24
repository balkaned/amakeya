import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {

  tipo:string="empleo";

  Experiencia:any=['1','2','3'];

  public exp =this.fb.group({

    puesto :['',Validators.required],
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  }

  guardar(){

    if(this.exp.invalid){

      return Object.values(this.exp.controls).forEach(control=>{
        control.markAsTouched();
      })

    }
 
    console.log(this.exp.value);
  }
  get experiencia(){

    return this.exp.get('puesto')
  }

  seleccionarCargo1(evento:any){
    this.experiencia?.setValue(evento.target.value, {onlyself:true})
  }
}
