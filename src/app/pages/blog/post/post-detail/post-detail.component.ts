import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../types/post';
import { ActivatedRoute } from '@angular/router';
import { RestfulService } from 'src/app/services/restful.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'blog-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  post: Post
  id: number

  constructor(
    private route: ActivatedRoute,
    private rest: RestfulService,
    private title: Title
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.id;
 
    this.rest.getPost(this.id).subscribe((res: Post) => {
      this.post = res;
      this.title.setTitle(this.post.title)
      let tagsTemplate = ``;
      this.post.tags.forEach((tag, index) => {
        if (index !== this.post.tags.length - 1) {
          tagsTemplate += `<span class="post-category-item-text">${tag}</span><span>,&nbsp;&nbsp;&nbsp;</span>`;
        } else {
          tagsTemplate += `<span class="post-category-item-text">${tag}</span>`;
        }
        Object.assign(this.post, { tagsTemplate });
      });
    }
    )

  }



}
