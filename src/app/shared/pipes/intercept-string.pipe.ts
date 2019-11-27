import { Pipe, PipeTransform } from '@angular/core';

type interceptType = 'line' | 'word'

@Pipe({
  name: 'interceptString'
})
export class InterceptStringPipe implements PipeTransform {
  /**
   *
   *
   * @param {string} value
   * @param {string} type  截取的类型： line | word
   * @param {number} count 截取的字数或行数
   * @returns {string}
   * @memberof InterceptStringPipe
   */
  transform(value: string, type: interceptType = 'word', count: number): any {

    if (!value) return ''

    switch (type) {
      case 'word':
        return value.substring(0, count)

      case 'line':
        let temp = value.split('\n', count)
        return temp.join('\n')
    }


  }

}
