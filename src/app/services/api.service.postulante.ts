import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postulante } from '../models/postulante.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicePostulante {

  private API_PATH=environment.production;
  private urlApiPostulanteListar="http://localhost:9095/api/postulantes/listar";
  private urlApiPostulanteGetId="http://localhost:9095/api/postulantes/getId";
  private urlApiPostulanteRegistrar="http://localhost:9095/api/postulantes/registrar";
  private urlApiPostulanteModificar="http://localhost:9095/api/postulantes/modificar";
  private urlApiPostulanteEliminar="http://localhost:9095/api/postulantes/eliminar";
  private urlApiPostulanteobtenerPostulantePorIdUsuario="http://localhost:9095/api/postulantes/obtenerPostulantePorIdUsuario";

  constructor(private http:HttpClient) { }

  public listarPostulante(): Observable<any>{
    return this.http.get(this.urlApiPostulanteListar);
  }

  /*public addPostulante(postulante:Postulante): Observable<any>{
    let json = JSON.stringify(postulante);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.urlApiPostulanteRegistrar, params, {headers: headers});
  }*/

  public addPostulante(form:any){
    const formData: Postulante={
      idPostulante: form.id,
      apellidop: form.apellidopaterno,
      apellidom: form.apellidomaterno,
      nombres: form.nombres,
      fechaNacimiento: new Date,
      sexo: 'M',
      dni: '45483321',
      brevete: 'A1',
      telefono: '984676184',
      email: 'carlosascues@gmail.com',
      direccion: 'Jr. Bayovar 340 Lima',
      departmentId: '1',
      provinceId: '10',
      districtId: '08'

      /*codigopais: '',
      numerotelefono: '',
      email: '',
      pais: '',
      departamento: '',
      provincia: '',
      distrito: '',
      direccion: '',
      gradoacademico: '',
      universidad: '',
      carrera: '',
      fechainicio: new Date,
      fechaegreso: new Date,
      encurso: '',
      fechaempezoatrabajar: new Date,
      examinarseleccion: '',
      resumen: '',
      puesto1: '',
      fechainicio1: new Date,
      fechafin1: new Date,
      jefereferencia1: '',
      cargo1: '',
      telefono1: '',
      email1: '',
      descripcion1: '',
      puesto2: '',
      fechainicio2: new Date,
      fechafin2: new Date,
      jefereferencia2: '',
      cargo2: '',
      telefono2: '',
      email2: '',
      descripcion2: '',
      puesto3: '',
      fechainicio3: new Date,
      fechafin3: new Date,
      jefereferencia3: '',
      cargo3: '',
      telefono3: '',
      email3: '',
      descripcion3: ''*/
    }

    let json = JSON.stringify(formData);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.urlApiPostulanteRegistrar, formData);

    //return this.http.post(this.urlApiPostulanteRegistrar,formData);
  }
}
