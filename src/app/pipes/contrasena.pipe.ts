import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrarContraseña: boolean = true): string {
    return mostrarContraseña ? '*'.repeat(value.length) : value;
  }


}
