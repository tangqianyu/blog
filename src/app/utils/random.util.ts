
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
const randomNumber = (lower: number, upper: number): number => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


type colorType = 'hex' | 'rgb'

const randomColor = (type: colorType = 'hex'): string => {
  switch (type) {
    case 'rgb':
      return `(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`

    case 'hex':
      return `#${randomNumber(0, 255).toString(16)}${randomNumber(0, 255).toString(16)}${randomNumber(0, 255).toString(16)}`
  }
}

export { randomNumber, randomColor }