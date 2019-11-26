import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qy-blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: 'EditText 搜索优化 | 安卓 offer 收割基',
      date: '2019-09-06',
      tags: ['安卓 offer 收割基', 'Android'],
      visitors: '1380'
    },
    {
      title: 'EditText 搜索优化 | 安卓 offer 收割基',
      date: '2019-09-06',
      tags: ['安卓 offer 收割基', 'Android'],
      visitors: '1000'
    },
    {
      title: 'EditText 搜索优化 | 安卓 offer 收割基',
      date: '2019-09-06',
      tags: ['安卓 offer 收割基', 'Android'],
      visitors: '1200'
    },
  ]


  constructor() { }

  ngOnInit() {
    this.posts.forEach(item => {
      let tagsTemplate = ''
      item.tags.forEach((tag, index) => {
        if (index != item.tags.length - 1) {
          tagsTemplate += `
          <span class="post-category-item-text">${tag}</span>
          <span>,&nbsp;&nbsp;&nbsp;</span>
          `
        } else {
          tagsTemplate += `
          <span class="post-category-item-text">${tag}</span>`
        }
        Object.assign(item, { tagsTemplate })
      })
    })
  }

  readMore(val) {
    console.log(val);

  }

}
