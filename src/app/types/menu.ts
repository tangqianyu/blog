export interface Menu {
  [key: string]: any;

  text?: string;
  link?: string;
  children?: Menu[];
}