import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { UserCenterComponent } from './user/user-center/user-center.component';
import { SystemMenuComponent } from './system/system-menu/system-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostWriteComponent } from './post/post-write/post-write.component';
import { BlogMenuComponent } from './system/blog-menu/blog-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'post_list'
  },

  {
    path: 'post_list',
    component: PostListComponent,
    data: {
      title: '文章列表'
    }
  },
  {
    path: 'post_write',
    component: PostWriteComponent,
    data: {
      title: '写文章'
    }
  },

  {
    path: 'user_setting',
    component: UserSettingComponent,
    data: {
      title: '个人设置'
    }
  },

  {
    path: 'user_center',
    component: UserCenterComponent,
    data: {
      title: '个人中心'
    }
  },

  {
    path: 'system_menu',
    component: SystemMenuComponent,
    data: {
      title: '系统目录'
    }
  },

  {
    path: 'blog_menu',
    component: BlogMenuComponent,
    data: {
      title: '博客目录'
    }
  }
]


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PageHeaderComponent,
    ModelFormComponent,

    PostListComponent,
    PostWriteComponent,
    UserSettingComponent,
    UserCenterComponent,
    SystemMenuComponent,
    BlogMenuComponent
  ],
  entryComponents: [
    ModelFormComponent
  ]
})
export class RoutesModule { }
