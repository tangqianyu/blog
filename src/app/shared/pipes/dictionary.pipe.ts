import { Pipe, PipeTransform } from '@angular/core';
import *  as dictionary from '../../utils/dictionary.util'

@Pipe({
  name: 'dictionary'
})
export class DictionaryPipe implements PipeTransform {

  transform(value: any, key: dictionary.DictionaryType, ): any {
    return dictionary[key](value)
  }

}
