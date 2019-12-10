import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingComponent } from './user-setting/user-setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user_setting'
  },

  {
    path: 'user_setting',
    component: UserSettingComponent,
    data: {
      title: '个人设置'
    }
  },
]


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UserSettingComponent
  ]
})
export class RoutesModule { }
