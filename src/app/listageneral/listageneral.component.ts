import { Component, OnInit } from '@angular/core';
import { Auto } from '../interface/auto.interface';
import { ListaautosService } from '../listaautos.service';

@Component({
  selector: 'app-listageneral',
  templateUrl: './listageneral.component.html',
  styleUrls: ['./listageneral.component.css']
})
export class ListageneralComponent implements OnInit {

  

  tituloListaAutos: string = 'Lista de Automóviles'

  

  listAutos: Auto []= [];
  constructor(private listaautosService: ListaautosService) {
   this.listAutos= this.listaautosService.getAutos();
   }

  

   deleteAuto(id: number): void {
    this.listaautosService.deleteAuto(id);
    this.listAutos=this.listaautosService.getAutos();
   }

  ngOnInit(): void {
  }



  muestraImagen: boolean = true;
  toogleImage(): void{
    this.muestraImagen = !this.muestraImagen
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
