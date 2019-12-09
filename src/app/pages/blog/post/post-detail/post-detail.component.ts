import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'qy-blog-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  post: Post = {
    id: 1,
    title: 'js内置对象',
    date: '2019-09-06',
    tags: ['JavaScript', '基础'],
    visitors: 1380,
    content: `
    ## Array
      - Array.isArray(对象)  判断这个对象是不是数组

      - .concat(数组,数组,数组,....)组成一个新的数组

      - .every(函数)  返回值是布尔类型,函数作为参数使用，函数中有三个参数，第一个参数是元素的值，第二个参数是索引值，第三个参数是原来的数组(没用) ，如果这个数组中的每个元素的值都符合条件，最后才返回的是true

      - .filter(函数) 返回的是数组中每一个元素都符合条件的元素，组成了一个新的数组

      - .push(值)  把值追加到数组中，加到最后，返回值也是追加数据之后的数组长度

      - .pop( ) 删除数组中最后一个元素，返回值就是删除的这个值

      - .shift( ) 删除数组中第一个元素，返回值就是删除的这个值

      - .unshift( ) 向数组的第一个元素前面插入一个新的元素，返回值是插入后的长度

      - .forEach(函数)  遍历数组用，相当于for循环

      - .indexOf(元素值) 返回的是索引,没有则是-1

      - .join("字符串")  返回的是一个字符串

      - .map(函数)  数组中的每个元素都要执行这个函数，把执行后的结果重新的全部放在一个新的数组中
    `
  }

  constructor() { }

  ngOnInit() {

    let tagsTemplate = ''
    this.post.tags.forEach((tag, index) => {
      if (index != this.post.tags.length - 1) {
        tagsTemplate += `
        <span class="post-category-item-text">${tag}</span>
        <span>,&nbsp;&nbsp;&nbsp;</span>
        `
      } else {
        tagsTemplate += `
        <span class="post-category-item-text">${tag}</span>`
      }
    })
    Object.assign(this.post, { tagsTemplate })
  }

}
