import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    return formatDistance(new Date(), value);// devuleve el tiempo que trancurro desde la dehca de hoy(new Date), hasta la fecha data(value).

  }
}
