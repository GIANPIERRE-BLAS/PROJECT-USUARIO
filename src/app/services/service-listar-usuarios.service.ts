import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceListarUsuariosService {

  private http = inject(HttpClient)
  listarUsuarios(){
    return this.http.get('http://localhost:8090/api/usuarios')
  }
}
