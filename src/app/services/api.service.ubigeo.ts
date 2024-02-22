import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceUbigeo {

  private urlApiUbigeoListarDepartamentos="http://localhost:9095/api/ubigeo/listarDepartamentos";
  private urlApiUbigeoListarProvinciasxDepartamento="http://localhost:9095/api/postulantes/getId"
  private urlApiUbigeoListarDistritosxProvincia="http://localhost:9095/api/postulantes/registrar";

  constructor(private http:HttpClient) { }

  public listarPostulante(): Observable<any>{
    return this.http.get(this.urlApiUbigeoListarDepartamentos);
  }

}
