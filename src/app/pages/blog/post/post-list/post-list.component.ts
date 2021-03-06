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
    this.rest.getPostList().subscribe((res: Post[]) => {
      this.posts = res

      this.posts.forEach((item: Post) => {
        let categoriesTemplate = ``;

        item.categories.forEach((category: string, index: number) => {
          if (index !== item.categories.length - 1) {
            categoriesTemplate += `<span class="post-category-item-text">${category}</span><span>,&nbsp;&nbsp;&nbsp;</span>`;
          } else {
            categoriesTemplate += `<span class="post-category-item-text">${category}</span>`;
          }
          Object.assign(item, { categoriesTemplate });
        });
      });
    })

  }

  readMore(id: number) {
    this.router.navigate(['/blog/post', id]);
  }

}
