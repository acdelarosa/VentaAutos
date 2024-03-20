import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaautosService } from '../../listaautos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

  autoForm: FormGroup
  constructor(fb: FormBuilder, private  autosService: ListaautosService) {
    this.autoForm = fb.group({
      Imagen: [
        '',
        [
        Validators.required,
        Validators.maxLength(400),
        Validators.minLength(5),
        ]
      ],
      Marca: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        ]
      ],
      Modelo: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        ]
      ],
      Año: [
        '',
        [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern("^[0-9]*$")
        ]
      ],
      Color: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        ]
      ],
      Kilometraje: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
      Precio: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
      Calificacion: [
        '',
        [
        Validators.required,
        Validators.maxLength(1),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
     
    })
  }

  ngOnInit() {
  }


Submit(){
   if (!this.autoForm.valid) {
    console.log('no es válido');
    return;
  }
  this.autosService.addAuto({
    id: this.autosService.listautos.length +1,
    ...this.autoForm.value,
  });
}
}
