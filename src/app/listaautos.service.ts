import { Injectable } from '@angular/core';
import { Auto } from './interface/auto.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaautosService {
 


listautos: Auto [] =[ 
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jxtTqW6xP-uaDmG2lmuv0cABB2XbCtwSshlVpZ7tzg&s',
  id: 1,
  marca: 'Ferrari',
  modelo: 'Portofino',
  anio: 2024,
  color: 'rojo',
  kilometraje: 250,
  precio: 350000,
  calificacion: 3
},
{
  image: 'https://img.remediosdigitales.com/875b45/mercedes-amg-g65-final-edition-01/840_560.jpg',
  id: 2,
  marca: 'Mercedes Benz',
  modelo: 'Wagon clase G',
  anio: 2024,
  color: 'negro perlado',
  kilometraje: 15000,
  precio: 160000,
  calificacion: 5
},
{
  image: 'https://www.clickheretesting.com/ParksLincolnTampa/research/2024/navigator/images/mlp-img-ext.jpg',
  id: 3,
  marca: 'Lincoln',
  modelo: 'Navitagor',
  anio: 2024,
  color: 'negro',
  kilometraje: 15000,
  precio: 97960,
  calificacion: 4
}
] 



constructor() { }

getAutos  (): Auto [] {
return this.listautos
}

getAutosbyId (id: number):Auto  | undefined {
return this.listautos.find((auto)=> auto.id==id);

}


addAuto (auto: Auto): void {
this.listautos.push(auto);
}



deleteAuto(id:number): void {
this.listautos=this.listautos.filter((auto)=> auto.id !== id);
}


/* listautos = this.listaFiltrada;
search = '';
buscarAutos(){
  this.listautos=this.listaFiltrada.filter((auto)=> 
  auto.marca.toLowerCase().includes(this.search.toLowerCase())
  );*/
} 



