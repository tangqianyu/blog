import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/post';
import { RestfulService } from 'src/app/services/restful.service';

@Component({
  selector: 'admin-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private rest: RestfulService
  ) { }

  ngOnInit() {
    this.getPostList()
  }

  getPostList() {
    this.rest.getAdminPostList().subscribe(res => {
      this.posts = res
    })
  }

}
