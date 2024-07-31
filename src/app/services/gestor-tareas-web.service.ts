import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestorTareasWebService {
  static httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  static URL: string = "https://test2prueba.free.beeceptor.com";
  static PATH = "/todos";

  tareas: Tarea[] = [];
  constructor(private clienteHttp: HttpClient) {
    this.clienteHttp.get<Tarea[]>(`${GestorTareasWebService.URL}${GestorTareasWebService.PATH}`)
      .forEach(data => {
        data.forEach(tarea => {
          this.tareas.push(tarea);
        });
      })
  }


  agregar(tarea: Tarea): void {
    this.tareas.push(tarea);
    /*
    const body = {};
    const parametros = new HttpParams()
      .append('id', tarea.id)
      .append('title', tarea.title)
      .append('completed', tarea.completed)
    this.clienteHttp.post<any>(GestorTareasWebService.URL + GestorTareasWebService.PATH, body, { params: parametros }).subscribe(
      {
        next(retorno: any) {
          //retorno es de tipo object
          console.log("Next:" + retorno.code);
          console.log("Next:" + retorno.message);
        },
        error(error: HttpErrorResponse) {
          //error es de tipo HttpErrorResponse
          console.log("Error:" + error.name);
          console.log("Error:" + error.message);
          console.log("Error:" + error.error);
          console.log("Error:" + error.ok);
        },
        complete() {
          console.log("Complete");
        }
      });
      */
  }
}
