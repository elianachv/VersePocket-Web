import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})export class UsuarioService {

  apiUrl = 'http://localhost:3000/usuarios/';

  constructor(private http: HttpClient) { }

  //Registrar estudiante
  registrarUsuario(nuevoUsuario: any): Observable<any> {
    let url = this.apiUrl + 'registro';
    let params = JSON.stringify(nuevoUsuario);
    console.log('Se envia: ' + params);
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, params, { headers: options }).pipe((res) => res);
  }
}
