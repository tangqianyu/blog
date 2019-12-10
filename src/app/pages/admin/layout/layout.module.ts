import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderUserComponent } from './header-user/header-user.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  
  declarations: [
    LayoutComponent,
    PageHeaderComponent,
    HeaderUserComponent,

  ],

  exports: [
    LayoutComponent,
  ],
  providers: [],
})
export class LayoutModule { }