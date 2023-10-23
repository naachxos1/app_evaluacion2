import { seccion } from 'src/app/appalumno/pages/alumno/mensajes/mensajes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMensaje } from 'src/app/appprofesor/interfaces/interseccion';
import { intersecciones} from 'src/app/appprofesor/interfaces/interSecciones';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  listMensaje() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  listseccion(): Observable<intersecciones> {
    return this.http.get<intersecciones>(`${environment.apiURL}/data`);
  }

  addseccion(seccion: IMensaje): Observable<IMensaje> {//Mensajes del profesor
    return this.http.post<IMensaje>(`${environment.apiURL}/data`, seccion);
  }

  addAlumno(seccion: IMensaje): Observable<IMensaje> {//Mensajes del alumno
    return this.http.post<IMensaje>(`${environment.apiURL}/data`, seccion);
  }

  getseccion(id: Number): Observable<intersecciones> {
    return this.http.get<intersecciones>(`${environment.apiURL}/data/?id=${id}`);
  }

  updateseccion(seccion: any): Observable<intersecciones> {
    return this.http.put<intersecciones>(`${environment.apiURL}/data/${seccion.id}`, seccion);
  }

  deleteseccion(seccion: any): Observable<intersecciones> {
    return this.http.delete<intersecciones>(`${environment.apiURL}/data/${seccion.id}`);
  }


}
