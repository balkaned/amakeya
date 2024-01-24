import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styleUrls: ['./postulante.component.css']
})
export class PostulanteComponent implements OnInit {

tipo:string='Postulante';

Cargos:any= ['Gerente', 'Programador', 'Otros'];

 public forma =this.fb.group({

    apellidopaterno:['',Validators.required],
    apellidomaterno:['',Validators.required],
    brevete:['',Validators.required],
    cargo1:['',Validators.required],
    cargo2:['',Validators.required],
    cargo3:['',Validators.required],
    carrera:['',Validators.required],
    departamento:['',Validators.required],
    descripcion2:['',Validators.required],
    descripcion3:['',Validators.required],
    descripcion1:['',Validators.required],
    direccion:['',Validators.required],
    distrito:['',Validators.required],
    dni:['',Validators.required],
    email:['',Validators.required,],
    email1:['',Validators.required,],
    email2:['',Validators.required,],
    email3:['',Validators.required,],
    encurso:['',Validators.required], 
    examinar:['',Validators.required],
    examinarseleccion:['',Validators.required],
    fechaegreso:['',Validators.required],
    fechaempezoatrabajar:['',Validators.required],
    fechafin1:['',Validators.required],
    fechafin2:['',Validators.required],
    fechafin3:['',Validators.required],
    fechainicio:['',Validators.required],
    fechainicio1:['',Validators.required],
    fechainicio2:['',Validators.required],
    fechainicio3:['',Validators.required],
    fechanacimiento:['',Validators.required],
    gradoacademico:['',Validators.required],
    jefereferencia1:['',Validators.required],
    jefereferencia2:['',Validators.required],
    jefereferencia3:['',Validators.required],
    nombre:['',Validators.required],
    numerotelefono:['',Validators.required],
    pais:['',Validators.required],
    provincia:['',Validators.required],
    puesto1:['',Validators.required],
    puesto2:['',Validators.required],
    puesto3:['',Validators.required],
    resumen:['',Validators.required],
    sexo:['',Validators.required],
    codigopais:['',Validators.required],
    telefono1:['',Validators.required],
    telefono2:['',Validators.required],
    telefono3:['',Validators.required],
    universidad:['',Validators.required]
  
 })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  }

  get apellidopaternoValido(){
    return this.forma.get('apellidopaterno')?.dirty && this.forma.get('apellidopaterno')?.touched
  }

  get apellidopaternoNoValido(){
    return this.forma.get('apellidopaterno')?.invalid && this.forma.get('apellidopaterno')?.touched
  }

  get apellidomaternoValido(){
    return this.forma.get('apellidomaterno')?.dirty && this.forma.get('apellidomaterno')?.touched
  }

  get apellidomaternoNoValido(){
    return this.forma.get('apellidomaterno')?.invalid && this.forma.get('apellidomaterno')?.touched
  }

  get nombreValido(){
    return this.forma.get('nombre')?.dirty && this.forma.get('nombre')?.touched
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get fechanacimientoValido(){
    return this.forma.get('fechanacimiento')?.dirty && this.forma.get('fechanacimiento')?.touched
  }

  get fechanacimientoNoValido(){
    return this.forma.get('fechanacimiento')?.invalid && this.forma.get('fechanacimiento')?.touched
  }

  get sexoValido(){
    return this.forma.get('sexo')?.dirty && this.forma.get('sexo')?.touched
  }

  get sexoNoValido(){
    return this.forma.get('sexo')?.invalid && this.forma.get('sexo')?.touched
  }

  get dniValido(){
    return this.forma.get('dni')?.dirty && this.forma.get('dni')?.touched
  }

  get dniNoValido(){
    return this.forma.get('dni')?.invalid && this.forma.get('dni')?.touched
  }

  get breveteValido(){
    return this.forma.get('brevete')?.dirty && this.forma.get('brevete')?.touched
  }

  get breveteNoValido(){
    return this.forma.get('brevete')?.invalid && this.forma.get('brevete')?.touched
  }

  get codigopaisValido(){
    return this.forma.get('codigopais')?.dirty && this.forma.get('codigopais')?.touched
  }

  get codigopaisNoValido(){
    return this.forma.get('codigopais')?.invalid && this.forma.get('codigopais')?.touched
  }

  get numerotelefonoValido(){
    return this.forma.get('numerotelefono')?.dirty && this.forma.get('numerotelefono')?.touched
  }

  get numerotelefonoNoValido(){
    return this.forma.get('numerotelefono')?.invalid && this.forma.get('numerotelefono')?.touched
  }

  get emailValido(){
    return this.forma.get('email')?.dirty && this.forma.get('email')?.touched
  }

  get emailNoValido(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }

  get paisValido(){
    return this.forma.get('pais')?.dirty && this.forma.get('pais')?.touched
  }

  get paisNoValido(){
    return this.forma.get('pais')?.invalid && this.forma.get('pais')?.touched
  }

  get departamentoValido(){
    return this.forma.get('departamento')?.dirty && this.forma.get('departamento')?.touched
  }

  get departamentoNoValido(){
    return this.forma.get('departamento')?.invalid && this.forma.get('departamento')?.touched
  }

  get provinciaValido(){
    return this.forma.get('provincia')?.dirty && this.forma.get('provincia')?.touched
  }

  get provinciaNoValido(){
    return this.forma.get('provincia')?.invalid && this.forma.get('provincia')?.touched
  }

  get distritoValido(){
    return this.forma.get('distrito')?.dirty && this.forma.get('distrito')?.touched
  }

  get distritoNoValido(){
    return this.forma.get('distrito')?.invalid && this.forma.get('distrito')?.touched
  }

  get direccionValido(){
    return this.forma.get('direccion')?.dirty && this.forma.get('direccion')?.touched
  }

  get direccionNoValido(){
    return this.forma.get('direccion')?.invalid && this.forma.get('direccion')?.touched
  }

  get gradoacademicoValido(){
    return this.forma.get('gradoacademico')?.dirty && this.forma.get('gradoacademico')?.touched
  }

  get gradoacademicoNoValido(){
    return this.forma.get('gradoacademico')?.invalid && this.forma.get('gradoacademico')?.touched
  }

  get universidadValido(){
    return this.forma.get('universidad')?.dirty && this.forma.get('universidad')?.touched
  }

  get universidadNoValido(){
    return this.forma.get('universidad')?.invalid && this.forma.get('universidad')?.touched
  }

  get carreraValido(){
    return this.forma.get('carrera')?.dirty && this.forma.get('carrera')?.touched
  }

  get carreraNoValido(){
    return this.forma.get('carrera')?.invalid && this.forma.get('carrera')?.touched
  }

  get fechainicioValido(){
    return this.forma.get('fechainicio')?.dirty && this.forma.get('fechainicio')?.touched
  }

  get fechainicioNoValido(){
    return this.forma.get('fechainicio')?.invalid && this.forma.get('fechainicio')?.touched
  }

  get fechaegresoValido(){
    return this.forma.get('fechaegreso')?.dirty && this.forma.get('fechaegreso')?.touched
  }

  get fechaegresoNoValido(){
    return this.forma.get('fechaegreso')?.invalid && this.forma.get('fechaegreso')?.touched
  } 

  get encursoValido(){
    return this.forma.get('encurso')?.dirty && this.forma.get('encurso')?.touched
  }

  get encursoNoValido(){
    return this.forma.get('encurso')?.invalid && this.forma.get('encurso')?.touched
  } 

  get fechaempezoatrabajarValido(){
    return this.forma.get('fechaempezoatrabajar')?.dirty && this.forma.get('fechaempezoatrabajar')?.touched
  }

  get fechaempezoatrabajarNoValido(){
    return this.forma.get('fechaempezoatrabajar')?.invalid && this.forma.get('fechaempezoatrabajar')?.touched
  } 

  get examinarValido(){
    return this.forma.get('examinar')?.dirty && this.forma.get('examinar')?.touched
  }

  get examinarNoValido(){
    return this.forma.get('examinar')?.invalid && this.forma.get('examinar')?.touched
  } 

  get examinarseleccionValido(){
    return this.forma.get('examinarseleccion')?.dirty && this.forma.get('examinarseleccion')?.touched
  }

  get examinarseleccionNoValido(){
    return this.forma.get('examinarseleccion')?.invalid && this.forma.get('examinarseleccion')?.touched
  } 
  
  get resumenValido(){
    return this.forma.get('resumen')?.dirty && this.forma.get('resumen')?.touched
  }

  get resumenNoValido(){
    return this.forma.get('resumen')?.invalid && this.forma.get('resumen')?.touched
  }

  get puesto1Valido(){
    return this.forma.get('puesto1')?.dirty && this.forma.get('puesto1')?.touched
  }

  get puesto1NoValido(){
    return this.forma.get('puesto1')?.invalid && this.forma.get('puesto1')?.touched
  }

  get fechainicio1Valido(){
    return this.forma.get('fechainicio1')?.dirty && this.forma.get('fechainicio1')?.touched
  }

  get fechainicio1NoValido(){
    return this.forma.get('fechainicio1')?.invalid && this.forma.get('fechainicio1')?.touched
  }

  get fechafin1Valido(){
    return this.forma.get('fechafin1')?.dirty && this.forma.get('fechafin1')?.touched
  }

  get fechafin1NoValido(){
    return this.forma.get('fechafin1')?.invalid && this.forma.get('fechafin1')?.touched
  }

  get jefereferencia1Valido(){
    return this.forma.get('jefereferencia1')?.dirty && this.forma.get('jefereferencia1')?.touched
  }

  get jefereferencia1NoValido(){
    return this.forma.get('jefereferencia1')?.invalid && this.forma.get('jefereferencia1')?.touched
  }  

  get cargo1Valido(){
    return this.forma.get('cargo1')?.dirty && this.forma.get('cargo1')?.touched
  }

  get cargo1NoValido(){
    return this.forma.get('cargo1')?.invalid && this.forma.get('cargo1')?.touched
  }

  get telefono1Valido(){
    return this.forma.get('telefono1')?.dirty && this.forma.get('telefono1')?.touched
  }

  get telefono1NoValido(){
    return this.forma.get('telefono1')?.invalid && this.forma.get('telefono1')?.touched
  }

  get email1Valido(){
    return this.forma.get('email1')?.dirty && this.forma.get('email1')?.touched
  }

  get email1NoValido(){
    return this.forma.get('email1')?.invalid && this.forma.get('email1')?.touched
  }

  get descripcion1Valido(){
    return this.forma.get('descripcion1')?.dirty && this.forma.get('descripcion1')?.touched
  }

  get descripcion1NoValido(){
    return this.forma.get('descripcion1')?.invalid && this.forma.get('descripcion1')?.touched
  }

  get puesto2Valido(){
    return this.forma.get('puesto2')?.dirty && this.forma.get('puesto2')?.touched
  }

  get puesto2NoValido(){
    return this.forma.get('puesto2')?.invalid && this.forma.get('puesto2')?.touched
  }

  get fechainicio2Valido(){
    return this.forma.get('fechainicio2')?.dirty && this.forma.get('fechainicio2')?.touched
  }

  get fechainicio2NoValido(){
    return this.forma.get('fechainicio2')?.invalid && this.forma.get('fechainicio2')?.touched
  }

  get fechafin2Valido(){
    return this.forma.get('fechafin2')?.dirty && this.forma.get('fechafin2')?.touched
  }

  get fechafin2NoValido(){
    return this.forma.get('fechafin2')?.invalid && this.forma.get('fechafin2')?.touched
  }

  get jefereferencia2Valido(){
    return this.forma.get('jefereferencia2')?.dirty && this.forma.get('jefereferencia2')?.touched
  }

  get jefereferencia2NoValido(){
    return this.forma.get('jefereferencia2')?.invalid && this.forma.get('jefereferencia2')?.touched
  }  

  get cargo2Valido(){
    return this.forma.get('cargo2')?.dirty && this.forma.get('cargo2')?.touched
  }

  get cargo2NoValido(){
    return this.forma.get('cargo2')?.invalid && this.forma.get('cargo2')?.touched
  }

  get telefono2Valido(){
    return this.forma.get('telefono2')?.dirty && this.forma.get('telefono2')?.touched
  }

  get telefono2NoValido(){
    return this.forma.get('telefono2')?.invalid && this.forma.get('telefono2')?.touched
  }

  get email2Valido(){
    return this.forma.get('email2')?.dirty && this.forma.get('email2')?.touched
  }

  get email2NoValido(){
    return this.forma.get('email2')?.invalid && this.forma.get('email2')?.touched
  }

  get descripcion2Valido(){
    return this.forma.get('descripcion2')?.dirty && this.forma.get('descripcion2')?.touched
  }

  get descripcion2NoValido(){
    return this.forma.get('descripcion2')?.invalid && this.forma.get('descripcion2')?.touched
  }

  get puesto3Valido(){
    return this.forma.get('puesto3')?.dirty && this.forma.get('puesto3')?.touched
  }

  get puesto3NoValido(){
    return this.forma.get('puesto3')?.invalid && this.forma.get('puesto3')?.touched
  }

  get fechainicio3Valido(){
    return this.forma.get('fechainicio3')?.dirty && this.forma.get('fechainicio3')?.touched
  }

  get fechainicio3NoValido(){
    return this.forma.get('fechainicio3')?.invalid && this.forma.get('fechainicio3')?.touched
  }

  get fechafin3Valido(){
    return this.forma.get('fechafin3')?.dirty && this.forma.get('fechafin3')?.touched
  }

  get fechafin3NoValido(){
    return this.forma.get('fechafin3')?.invalid && this.forma.get('fechafin3')?.touched
  }

  get jefereferencia3Valido(){
    return this.forma.get('jefereferencia3')?.dirty && this.forma.get('jefereferencia3')?.touched
  }

  get jefereferencia3NoValido(){
    return this.forma.get('jefereferencia3')?.invalid && this.forma.get('jefereferencia3')?.touched
  }  

  get cargo3Valido(){
    return this.forma.get('cargo3')?.dirty && this.forma.get('cargo3')?.touched
  }

  get cargo3NoValido(){
    return this.forma.get('cargo3')?.invalid && this.forma.get('cargo3')?.touched
  }

  get telefono3Valido(){
    return this.forma.get('telefono3')?.dirty && this.forma.get('telefono3')?.touched
  }

  get telefono3NoValido(){
    return this.forma.get('telefono3')?.invalid && this.forma.get('telefono3')?.touched
  }

  get email3Valido(){
    return this.forma.get('email3')?.dirty && this.forma.get('email3')?.touched
  }

  get email3NoValido(){
    return this.forma.get('email3')?.invalid && this.forma.get('email3')?.touched
  }

  get descripcion3Valido(){
    return this.forma.get('descripcion3')?.dirty && this.forma.get('descripcion3')?.touched
  }

  get descripcion3NoValido(){
    return this.forma.get('descripcion3')?.invalid && this.forma.get('descripcion3')?.touched
  }

  



  guardar(){

    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach(control=>{
        control.markAsTouched();
      })

    }
 
    console.log(this.forma.value);
  }

  get cargos1(){

    return this.forma.get('cargo1')
  }

  seleccionarCargo1(evento:any){
    this.cargos1?.setValue(evento.target.value, {onlyself:true})
  }

  get cargos2(){

    return this.forma.get('cargo1')
  }

  seleccionarCargo2(evento:any){
    this.cargos2?.setValue(evento.target.value, {onlyself:true})
  }

  get cargos3(){

    return this.forma.get('cargo1')
  }

  seleccionarCargo3(evento:any){
    this.cargos3?.setValue(evento.target.value, {onlyself:true})
  }

}