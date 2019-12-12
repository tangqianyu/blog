import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { TagsComponent } from './tags/tags.component';
import { ArchivesComponent } from './archives/archives.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { ToolsComponent } from './tools/tools.component';
import { RewardComponent } from './reward/reward.component';
import { MarkdownModule } from 'ngx-markdown';
import { TagCloudModule } from 'angular-tag-cloud-module';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },

      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: '首页'
        }
      },

      {
        path: 'post/:id',
        component: PostDetailComponent
      },

      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: '关于'
        }
      },

      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: '分类'
        }
      },

      {
        path: 'tags',
        component: TagsComponent,
        data: {
          title: '标签'
        }
      },

      {
        path: 'archives',
        component: ArchivesComponent,
        data: {
          title: '归档'
        }
      },

      {
        path: 'open_source',
        component: OpenSourceComponent,
        data: {
          title: '我的开源库'
        }
      },

      {
        path: 'tools',
        component: ToolsComponent,
        data: {
          title: '我的工具库'
        }
      },

      {
        path: 'reward',
        component: RewardComponent,
        data: {
          title: '打赏博主'
        }
      }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MarkdownModule.forChild(),
    SharedModule,
    TagCloudModule,
  ],
  declarations: [
    BlogComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    TagsComponent,
    ArchivesComponent,
    OpenSourceComponent,
    ToolsComponent,
    RewardComponent,
    PostListComponent,
    PostDetailComponent,

  ]
})
export class BlogModule { }
