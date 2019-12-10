import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
          }
        ]
      },

      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: '登录'
        }
      },
    ]

  }
]

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,

  ],
  imports: [
    SharedModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class AdminModule { }