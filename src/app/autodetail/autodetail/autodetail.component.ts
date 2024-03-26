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

carro: Auto | undefined

  constructor(
    private route: ActivatedRoute,
     private autoService : ListaautosService

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.carro = this.autoService.getAutosbyId(params['codigo']);
    });
  }

  recepcion(dato: number){
    console.log('Dato:', dato)
      }
}
