import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  declarations: [

  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
