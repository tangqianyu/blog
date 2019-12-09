import {Pipe, PipeTransform} from '@angular/core';

type interceptType = 'line' | 'word';

@Pipe({
  name: 'interceptString'
})
export class InterceptStringPipe implements PipeTransform {

  transform(value: string, type: interceptType = 'word', count: number): any {
    if (!value) {
      return '';
    }

    switch (type) {
      case 'word':
        return value.substring(0, count);

      case 'line':
        const temp = value.split('\n', count);
        return temp.join('\n');
    }


  }

}
