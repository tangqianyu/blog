interface FormItemOption {
  label: string;
  value: any;
}

export interface FormItem {
  value: any;
  key: string;
  label: string;
  required: boolean;
  type: 'text' | 'textarea' | 'radio';
  options?: FormItemOption[];
}
