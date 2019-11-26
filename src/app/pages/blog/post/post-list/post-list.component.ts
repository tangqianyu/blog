import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qy-blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: ''
    },
    {
      title: ''
    },
    {
      title: ''
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
