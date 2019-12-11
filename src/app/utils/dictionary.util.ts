export const menuStatus = (key: number) => {
  const d = ['启用', '禁用']
  return d[key]
}

export type DictionaryType = 'menuStatus'
