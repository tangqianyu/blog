import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { randomNumber, randomColor } from 'src/app/utils/random.util';

@Component({
  selector: 'qy-blog-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {

  options: CloudOptions = {
    overflow: false,
    zoomOnHover: {
      scale: 1.2,
      transitionTime: 0.3,
      delay: 0.3,
      color: randomColor('hex')
    },
    realignOnResize: false
  };

  data: CloudData[] = [
    { text: 'Java', weight: randomNumber(1, 10) },
    { text: 'Android', weight: randomNumber(1, 10) },
    { text: 'Python', weight: randomNumber(1, 10) },
    { text: 'JavaScript', weight: randomNumber(1, 10) },
    { text: '闲谈', weight: randomNumber(1, 10) },
  ]


  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
