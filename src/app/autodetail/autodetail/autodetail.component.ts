import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaautosService } from '../../listaautos.service';
import { Auto } from '../../interface/auto.interface';

@Component({
  selector: 'app-autodetail',
  templateUrl: './autodetail.component.html',
  styleUrls: ['./autodetail.component.css']
})
export class AutodetailComponent implements OnInit {

carro: any = {};
public listaVehiculos: Array<Auto> = [];
public filtro: string = '';
vehiculo?: Auto;

  constructor(
    private route: ActivatedRoute,
     private autoService : ListaautosService

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.autoService.getAutosbyCodigo(params['codigo']).subscribe((data)=>{
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          this.vehiculo?.foto
          this.vehiculo?.codigo
          this.vehiculo?.marca
          this.vehiculo?.modelo
          this.vehiculo?.anio
          this.vehiculo?.kilometraje
          this.vehiculo?.precio
          this.vehiculo?.calificacion
        }
        
      })
    });
  }

  consultarVehiculos(){
    this.autoService.getAutos(this.filtro).subscribe(respuesta => {
      if(respuesta.codigo == '1'){
        this.listaVehiculos = respuesta.data;
       
      }
      
    }
  
    );
  }

  recepcion(dato: number){
    console.log('Dato:', dato)
      }
}
