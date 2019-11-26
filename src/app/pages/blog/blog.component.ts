import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qy-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  isCollapsed = false;
  menus = [
    {
      text: '首页',
      link: '/blog/home',
      icon: 'home'
    },
    {
      text: '关于',
      link: '/blog/about',
      icon: 'user'
    },
    {
      text: '分类',
      link: '/blog/category',
      icon: 'appstore'
    },
    {
      text: '标签',
      link: '/blog/tags',
      icon: 'tags'
    },
    {
      text: '归档',
      link: '/blog/archives',
      icon: 'database'
    },
    {
      text: '我的开源库',
      link: '/blog/open_source',
      icon: 'github'
    },
    {
      text: '我的工具库',
      link: '/blog/tools',
      icon: 'tool'
    },
    {
      text:'打赏博主',
      link:'/blog/reward',
      icon:'red-envelope'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
