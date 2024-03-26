import { Injectable } from '@angular/core';
import { Auto } from './interface/auto.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaautosService {



  listautos: Auto[] = [
    {
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jxtTqW6xP-uaDmG2lmuv0cABB2XbCtwSshlVpZ7tzg&s',
      codigo: 1,
      marca: 'Ferrari',
      modelo: 'Portofino',
      anio: 2024,
      color: 'rojo',
      kilometraje: 250,
      precio: 350000,
      calificacion: 3
    },
   /*  {
      foto: 'https://img.remediosdigitales.com/875b45/mercedes-amg-g65-final-edition-01/840_560.jpg',
      codigo: 2,
      marca: 'Mercedes Benz',
      modelo: 'Wagon clase G',
      anio: 2024,
      color: 'negro perlado',
      kilometraje: 15000,
      precio: 160000,
      calificacion: 5
    }, */
    {
      foto: 'https://www.clickheretesting.com/ParksLincolnTampa/research/2024/navigator/images/mlp-img-ext.jpg',
      codigo: 3,
      marca: 'Lincoln',
      modelo: 'Navigator',
      anio: 2024,
      color: 'negro',
      kilometraje: 15000,
      precio: 97960,
      calificacion: 4
    }
  ]

  autosSubject = new BehaviorSubject(this.listautos);
  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  /* getAutos  ()  {
  return this.autosSubject.asObservable();
  } */



  getAutos(): Observable<Auto[]> {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculos/").pipe(
      map(respuesta => {
        return respuesta.data
      })
    )
  }

  private httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  insertVehiculo(vehiculo: Auto) {
    return this.http.post<Respuesta>(this.baseUrl +"vehiculo/", vehiculo, this.httpOptions);
  }

  getVehiculos(filtro: any): Observable<Array<Auto>> {
    const escucha: Observable<Array<Auto>> = new Observable(escuchando => {
      let lista = this.listautos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()))
      escuchando.next(lista)
    })
    return escucha
  }

  getAutosbyId(id: number): Auto | undefined {
    return this.listautos.find((auto) => auto.codigo == id);

  }


  addAuto(auto: Auto): void {
    console.log('auto:', auto)
    this.listautos.push(auto);
    this.autosSubject.next(this.listautos);
    console.log('lista:', this.listautos)
  }



  deleteAuto(id: number): void {
    this.listautos = this.listautos.filter((auto) => auto.codigo !== id);
    this.autosSubject.next(this.listautos);
  }



}


export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Auto> | Auto | any;

}

