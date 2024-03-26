import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicePostulante {

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
}
