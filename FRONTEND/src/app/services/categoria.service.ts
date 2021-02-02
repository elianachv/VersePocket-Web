import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) { }

  //Crear Categoria
  crearCategoria(nuevaCategoria: any): Observable<any> {
    let url = this.apiUrl + '/crear';
    let params = JSON.stringify(nuevaCategoria);
    console.log('Se envia: ' + params);
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, params, { headers: options }).pipe((res) => res);
  }

  //Listar Categorias 
  listarCategorias(): Observable<any> {
    let url = this.apiUrl;
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: options }).pipe((res) => res);
  }

  //Mostrar Categoria
  mostrarCategoria(id:string): Observable<any> {
    let url = this.apiUrl+'/mostrar/'+id;
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: options }).pipe((res) => res);
  }
}
