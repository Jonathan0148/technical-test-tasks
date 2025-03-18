import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateText'
})
export class StateTextPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Pendiente';
      case 2:
        return 'Completada';
      default:
        return value.toString();
    }
  }
}
