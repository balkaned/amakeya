import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceOfertante {

  private urlApiOfertanteListar="http://localhost:9095/api/ofertantes/listar";
  private urlApiOfertanteGetId="http://localhost:9095/api/ofertantes/getId"
  private urlApiOfertanteRegistrar="http://localhost:9095/api/ofertantes/registrar";
  private urlApiOfertanteModificar="http://localhost:9095/api/ofertantes/modificar";
  private urlApiOfertanteEliminar="http://localhost:9095/api/ofertantes/eliminar";
  private urlApiOfertantePostulantePorIdUsuario="http://localhost:9095/api/ofertantes/obtenerPostulantePorIdUsuario";

  constructor(private http:HttpClient) { }

  public listarOfertante(): Observable<any>{
    return this.http.get(this.urlApiOfertanteListar);
  }


}
