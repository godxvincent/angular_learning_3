import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, allWords: boolean = true): string {

    const texto = value.toLocaleLowerCase();
    let palabras: string[] = texto.split(' ');
    if ( allWords ) {
      palabras = palabras.map( palabra => {
         return palabra[0].toLocaleUpperCase() + palabra.substr(1);
      });
    }  else {
      palabras[0] = palabras[0][0].toLocaleUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
  }

}
