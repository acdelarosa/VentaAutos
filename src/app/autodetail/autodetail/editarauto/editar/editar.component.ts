import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auto } from '../../../../interface/auto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaautosService } from '../../../../listaautos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  vehiculo?: Auto;
  formulario: FormGroup;


  constructor(private route: ActivatedRoute, private vehiculoService: ListaautosService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      'foto': [
        '',
      ],
      'codigo': [
        '',

      ],
      'marca': [
        '',
        [

          Validators.minLength(3),
          Validators.maxLength(20),
        ]
      ],
      'modelo': [
        '',
        [

          Validators.minLength(3),
          Validators.maxLength(20),
        ]
      ],
      'anio': [
        '',
        [

          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern("^[0-9]*$")
        ]
      ],
     /*  'color': [
        '',
        [

          Validators.minLength(3),
          Validators.maxLength(25),
        ]
      ], */
      'kilometraje': [
        '',
        [

          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[0-9]*$"),
        ]
      ],
      'precio': [
        '',
        [

          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern("^[0-9]*$"),
        ]
      ],
      'calificacion': [
        '',
        [

          Validators.maxLength(1),
          Validators.pattern("^[0-9]*$"),
        ]
      ],
    })
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculoService.getAutosbyCodigo(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          this.formulario.controls['foto'].setValue(this.vehiculo?.foto)
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo)
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca)
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo)
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio)
        
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje)
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio)
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion)
        } else {
          Swal.fire({
            title: 'Mensaje',
            text: 'No se pudo cargar la información',
            icon: "error"
          })
        };

       

      });


    });


  }
  guardar(){
    if (this.formulario.valid){
      this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data =>{
        if(data.codigo =='1'){
          Swal.fire({
            title: 'Mensaje',
           text: 'Vehículo actualizado con éxito',
            icon: "success"
          })
        }
      });
     
    }else{
      Swal.fire({
        title: 'Mensaje',
        text: 'Faltan llenar campos',
        icon: "error"
      })
    };
}

}
