import { Pipe, PipeTransform } from '@angular/core';
import { HasName } from '../model/hasname';

@Pipe({ name: 'arraypipe' })
export class ArrayPipe implements PipeTransform {

    transform(value: HasName[], ...args: any[]) {
        return value.map(val => val.name).join(', ');
    }

}