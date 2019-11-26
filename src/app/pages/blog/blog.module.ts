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

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: '首页'
        }
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
      }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    BlogComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    TagsComponent,
    PostListComponent,
    PostDetailComponent,

  ]
})
export class BlogModule { }
