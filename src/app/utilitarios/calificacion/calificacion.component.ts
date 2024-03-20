import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  @Input() calificacion: number = 0;
lista: Array <any>= [];

  constructor() { }

  ngOnInit() {
    for(let i=0; i<this.calificacion; i++){
      this.lista.push(1);
    }
  }

}
