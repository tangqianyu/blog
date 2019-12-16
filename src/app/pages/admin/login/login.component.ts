import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestfulService } from 'src/app/services/restful.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    fb: FormBuilder,
    private rest: RestfulService,
    private router: Router
  ) {
    this.form = fb.group({
      account: [null, Validators.required],
      password: [null, Validators.required],

    });
  }

  ngOnInit() {
  }

  submit() {
    /* 验证 */
    let flag: boolean = true;
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
      if (this.form.controls[i].invalid) flag = false;
    }
    if (!flag) return;

    /* 拿到参数 */
    let data: any = {};
    for (let key in this.form.controls) {
      let temp = {};
      temp[key] = this.form.controls[key].value;
      Object.assign(data, temp);
    }

    this.rest.login(data).subscribe((res: string) => {
            
      localStorage.setItem('token', res)
      this.router.navigate([localStorage.getItem('path') || 'admin'])
    })

  }

}
