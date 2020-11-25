import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombreRaro = 'RicardO aNDRes VargAS MARTINEz';
  nombre = 'Ricardo Andrés Vargas';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 12345.5;
  heroe = {
    nombre : 'logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle : 'primera',
      casa : 20
    }
  };
  valorPromesa = new Promise<string> ((resolve, reject) => {
    setTimeout( () => {
      resolve('Llego la data');
    }, 4500);
  });

  fecha = new Date();
  idioma = 'es';

  setSpanish(): void {
    this.idioma = 'es';
  }
  setEnglish(): void {
    this.idioma = 'en';
  }
  setFrench(): void {
    this.idioma = 'fr';
  }

}
