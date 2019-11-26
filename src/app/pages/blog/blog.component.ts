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
  ];


  constructor() { }

  ngOnInit() {
  }

}
