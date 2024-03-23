import { Component, Input, OnInit, input } from '@angular/core';
import { Auto } from '../interface/auto.interface';
import { ListaautosService } from '../listaautos.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listageneral',
  templateUrl: './listageneral.component.html',
  styleUrls: ['./listageneral.component.css']
})
export class ListageneralComponent implements OnInit {

  
  /* filtro: string = ''; */


  private _filtro: string = '';
get filtro(){
  return this._filtro
}

set filtro(data:string){
  this._filtro=data
  this.consultaVehiculos();
}

  @Input() valor: string = '';
  


  

  tituloListaAutos: string = 'Lista de Automóviles'

  

  listAutos: Auto []= [];
  constructor(private listaautosService: ListaautosService, private fb: FormBuilder) {
   this.listaautosService.getAutos().subscribe(data =>{this.listAutos=data});
   
   }

  

   deleteAuto(id: number): void {
    this.listaautosService.deleteAuto(id);
    this.listaautosService.getAutos();
   }

  ngOnInit() {
    this.consultaVehiculos();

  }

  consultaVehiculos(){

    this.listaautosService.getVehiculos(this.filtro).subscribe(data =>{
      this.listAutos = data;
    })
  }


  muestraImagen: boolean = true;
  toogleImage(): void{
    this.muestraImagen = !this.muestraImagen
  }

  recepcion(dato: number){
console.log('Dato:', dato)
  }


 /*  listaFiltrada [] : Auto [];
  listautos ='';
  search = '';
  buscarAutos(){
    this.listautos=this.listaFiltrada.filter((auto)=> 
    auto.marca.toLowerCase().includes(this.search.toLowerCase())
    );
  } */



  

}

