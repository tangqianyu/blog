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
      text: '文章管理',
      icon: 'book',
      children: [
        {
          text: '文章列表',
          link: 'post_list'
        },
        {
          text: '写文章',
          link: 'post_write'
        },
      ]
    },

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
    },
    {
      text: '系统设置',
      icon: 'setting',
      children: [
        {
          text: '系统菜单',
          link: 'system_menu'
        }
      ]
    }
  ]

  @ViewChild('sider', { static: false }) siderRef: NzSiderComponent


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCollapsedWidth();
    }, 0)
    window.addEventListener("resize", () => {
      this.setCollapsedWidth();
    });
  }

  setCollapsedWidth() {
    if (document.documentElement.clientWidth <= 767) {
      this.isCollapsed = true;
      this.siderRef.nzCollapsedWidth = 0;
    } else {
      this.siderRef.nzCollapsedWidth = 80;
    }
  }


  handleTriggerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

}
