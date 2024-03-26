import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaautosService } from '../../listaautos.service';
import { Auto } from '../../interface/auto.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  autoForm: FormGroup;
  constructor(private fb: FormBuilder, private  autosService: ListaautosService) {


    this.autoForm = this.fb.group({
      'foto': [
        '',
      ],
      'codigo': [
        '',
        [
        Validators.required
        ]
      ],
      'marca': [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        ]
      ],
      'modelo' :[
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        ]
      ],
      'anio': [
        '',
        [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern("^[0-9]*$")
        ]
      ],
      'color' : [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        ]
      ],
      'kilometraje':  [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
      'precio': [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
      'calificacion': [
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
    codigo: this.autosService.listautos.length +1,
    ...this.autoForm.value,
  });
} 

Guardar(){
  if(this.autoForm.valid){
    this.autosService.insertVehiculo({...this.autoForm.value}).subscribe(
     respuesta =>{
      if(respuesta.codigo== '1'){
        Swal.fire({
          title: 'Mensaje',
         text: 'Vehículo registrado con éxito',
          icon: "success"
        }).then(res  => {
          this.autoForm.reset()
        })  
      } else{
        Swal.fire({
          title: 'Mensaje',
         text: 'No se pudo registrar el vehículo',
          icon: "error"
        })
      }
     }
    )
     } else{
      Swal.fire({
        title: 'Mensaje',
       text: 'Faltan campos por llenar',
        icon: "error"
      });
  }
  
}
}
