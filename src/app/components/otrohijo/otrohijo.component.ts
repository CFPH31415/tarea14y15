import { Component } from '@angular/core';

@Component({
  selector: 'app-otrohijo',
  templateUrl: './otrohijo.component.html',
  styleUrls: ['./otrohijo.component.css']
})
export class OtroHijoComponent {

  titulo = 'Data Binding Interpolation';

  textoInfo: string = "El two-way data binding en Angular nos permite modificar el valor de una propiedad de "+
                      "forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad "+
                      "en la vista el valor también se actualiza en el modeo de datos.";

  buttonName = 'Ocultar';
  cambiador = true;

  toggle() {

    if (this.buttonName === 'Ocultar') {
      this.cambiador = false;
      this.buttonName = 'Mostrar';
    } else if (this.buttonName === 'Mostrar') {
      this.buttonName = 'Ocultar';
      this.cambiador = true;
    }
  }
}
