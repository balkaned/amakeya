import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiServicePostulante } from 'src/app/services/api.service.postulante';
import { ApiServiceUbigeo } from 'src/app/services/api.service.ubigeo';
import { Postulante } from 'src/app/models/postulante.model';

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styleUrls: ['./postulante.component.css']
})

export class PostulanteComponent implements OnInit {

  data: any[] = [];
  dataDepartamentos: any[] = [];

  public Postulante={
    id:1,
    apellidopaterno:"",
    apellidomaterno:"",
    nombres:"",
    fechanacimiento:"",
    sexo:"",
    dni:"",
    brevete:"",
    codigopais:"",
    numerotelefono:"",
    email:"",
    pais:"",
    departamento:"",
    provincia:"",
    distrito:"",
    direccion:"",
    gradoacademico:"",
    universidad:"",
    carrera:"",
    fechainicio:"",
    fechaegreso:"",
    encurso:"",
    fechaempezoatrabajar:"",
    examinarseleccion:"",
    resumen:"",
    puesto1:"",
    fechainicio1:"",
    fechafin1:"",
    jefereferencia1:"",
    cargo1:"",
    telefono1:"",
    email1:"",
    descripcion1:"",
    puesto2:"",
    fechainicio2:"",
    fechafin2:"",
    jefereferencia2:"",
    cargo2:"",
    telefono2:"",
    email2:"",
    descripcion2:"",
    puesto3:"",
    fechainicio3:"",
    fechafin3:"",
    jefereferencia3:"",
    cargo3:"",
    telefono3:"",
    email3:"",
    descripcion3:""
  }

  constructor(
      private fb:FormBuilder,
      private apiServicePostulante: ApiServicePostulante,
      private apiServiceUbigeo: ApiServiceUbigeo
      ){
  }

  ngOnInit(): void {
    this.listarPostulantes();
    this.listarDepartamentos();
  }

  guardar(){
    console.log(this.Postulante);
    console.log(this.Postulante.nombres);
    
    this.apiServicePostulante.addPostulante(this.Postulante).subscribe(data =>{
      console.log("data: "+this.data);
    });
  }

  listarPostulantes(){
    this.apiServicePostulante.listarPostulante().subscribe(data =>{
      this.data=data;
      console.log("data: "+this.data);
    })
  }

  listarDepartamentos(){
    this.apiServiceUbigeo.listarPostulante().subscribe(data=>{
      this.dataDepartamentos=data;
      console.log("datadepartamentos: "+this.dataDepartamentos);
    })
  }
}