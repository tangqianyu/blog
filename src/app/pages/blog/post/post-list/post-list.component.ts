import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../types/post';
import { Router } from '@angular/router';
import { RestfulService } from 'src/app/services/restful.service';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];


  constructor(
    private router: Router,
    private rest: RestfulService,
  ) {
  }

  ngOnInit() {
    // this.rest.getPostList().subscribe((res: Post[]) => {
    //   console.log(res);
    //   this.posts = res

    //   this.posts.forEach((item: Post) => {
    //     let tagsTemplate = ``;
    //     item.tags.forEach((tag, index) => {
    //       if (index !== item.tags.length - 1) {
    //         tagsTemplate += `<span class="post-category-item-text">${tag}</span><span>,&nbsp;&nbsp;&nbsp;</span>`;
    //       } else {
    //         tagsTemplate += `<span class="post-category-item-text">${tag}</span>`;
    //       }
    //       Object.assign(item, { tagsTemplate });
    //     });
    //   });
    // })

  }

  readMore(id: number) {
    this.router.navigate(['/blog/post', id]);
  }

}
