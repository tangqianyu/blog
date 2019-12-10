import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptStringPipe } from './pipes/intercept-string.pipe';

// region your componets & directives & pipes
const COMPONENTS = [];
const DIRECTIVES = [];
const PIPES = [InterceptStringPipe];


@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
