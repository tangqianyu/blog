import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { FormItem } from 'src/app/types/formItem';



@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.less']
})
export class ModelFormComponent implements OnInit {

  validateForm: FormGroup;

  private _form: FormItem[];

  @Input()
  get form(): FormItem[] {
    return this._form;
  }
  set form(val: FormItem[]) {
    this._form = val;
  }


  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    let group: any = {};
    this.form.forEach(item => {
      let temp: any = [item.value];
      if (item.required) {
        temp.push([Validators.required]);
      }
      group[item.key] = temp;
    })

    this.validateForm = this.fb.group(group);

  }

  confirm() {
    let flag: boolean = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (this.validateForm.controls[i].invalid) flag = false;
    }
    if (!flag) return;

    let data = {};
    for (let key in this.validateForm.controls) {
      let temp = {};
      temp[key] = this.validateForm.controls[key].value;
      Object.assign(data, temp);
    }

    this.modal.destroy(data);
  }

  cancel() {
    this.modal.destroy();
  }
}
