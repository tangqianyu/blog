import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NzSiderComponent } from 'ng-zorro-antd';
import { Menu } from 'src/app/types/menu';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  isCollapsed = false;
  menus: Menu[] = [
    {
      text: '个人页',
      icon: 'user',
      children: [
        {
          text: '个人设置',
          link: 'user_setting'
        },
        {
          text: '个人中心',
          link: 'user_center'
        }
      ]
    }
  ]

  @ViewChild('sider', { static: false }) siderRef: NzSiderComponent


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 767) {
        this.isCollapsed = true
        this.siderRef.nzCollapsedWidth = 0
      } else {
        this.siderRef.nzCollapsedWidth = 80
      }
    })
  }

  handleTriggerClick() {
    this.isCollapsed = !this.isCollapsed;
  }


}
