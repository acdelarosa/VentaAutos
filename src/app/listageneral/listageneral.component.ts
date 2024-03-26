import { Component, Input, OnInit, input } from '@angular/core';
import { Auto } from '../interface/auto.interface';
import { ListaautosService } from '../listaautos.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listageneral',
  templateUrl: './listageneral.component.html',
  styleUrls: ['./listageneral.component.css']
})
export class ListageneralComponent implements OnInit {


  /* filtro: string = ''; */


  //private _filtro: string = '';
  public rows: number = 10;
  public page: number = 1;
  public filtro: string = '';

 /*  get filtro() {
    return this._filtro
  }

  set filtro(data: string) {
    this._filtro = data
    this.consultaVehiculos();
  } */

  @Input() valor: string = '';





  tituloListaAutos: string = 'Lista de Automóviles'



  listaVehiculos: Auto[] = [];
  constructor(private listaautosService: ListaautosService, private fb: FormBuilder) {
    this.listaautosService.getAutos().subscribe(data => { this.listaVehiculos = data });

  }

  ngOnInit() {
    
this.consultarVehiculos()
  }


consultarVehiculos(){
  this.listaautosService.getAutos(this.filtro, this.rows, this.page).subscribe(respuesta => {
    console.log(respuesta);
    this.listaVehiculos = respuesta
  }

  );
}
  

  consultaVehiculos() {

    this.listaautosService.getAutos(this.filtro).subscribe(respuesta => {
      console.log(respuesta);
      this.listaVehiculos = respuesta;
    })
  }


  muestraImagen: boolean = true;
  toogleImage(): void {
    this.muestraImagen = !this.muestraImagen
  }

  recepcion(dato: number) {
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


  eliminar(codigo: string) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este vehículo',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      icon: "question"
    }).then((result) => {
      if (result.isConfirmed) {
        this.listaautosService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo == '1'){
            this.consultarVehiculos();
          }
        }) 
        Swal.fire({
          title: "Mensaje",
          text: "Vehiculo eliminado con Exito",
          icon: "success"
        })
      } else({
        title: "Mensaje",
        text: "No se pudo eliminar el vehículo",
        icon: "error",
      })
    })
  }



}

