import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { InterceptStringPipe } from './pipes/intercept-string.pipe';


@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  declarations: [
    InterceptStringPipe
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    CommonModule,

    InterceptStringPipe
  ]
})
export class SharedModule { }
