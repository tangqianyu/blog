import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { FormItem } from 'src/app/types/formItem';
import { ModelFormComponent } from '../../components/model-form/model-form.component';
import { Menu } from 'src/app/types/menu';

@Component({
  selector: 'admin-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.less']
})
export class SystemMenuComponent implements OnInit {
  menus: Menu[] = [
    {
      id: 1,
      text: '文章管理',
      icon: 'book',
      status: 0,
      children: [
        {
          id: 2,
          text: '文章列表',
          link: 'post_list',
          status: 0,
        },
        {
          id: 3,
          text: '写文章',
          link: 'post_write',
          status: 0,
        },
      ]
    },

    {
      id: 4,
      text: '个人页',
      icon: 'user',
      status: 0,
      children: [
        {
          id: 5,
          text: '个人设置',
          link: 'user_setting',
          status: 0,

        },
        {
          id: 6,
          text: '个人中心',
          link: 'user_center',
          status: 0,
        }
      ]
    },
    {
      id: 7,
      text: '系统设置',
      icon: 'setting',
      status: 0,
      children: [
        {
          id: 8,
          text: '系统菜单',
          link: 'system_menu',
          status: 1,
        }
      ]
    }
  ];
  mapOfExpandedData: { [key: string]: Menu[] } = {};

  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.menus.forEach(item => {
      this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
    });
  }

  add() {
    let form: FormItem[] = [
      { key: 'text', value: '', label: '菜单名称', type: 'text', required: true },
      { key: 'parentId', value: '', label: '父级编号', type: 'text', required: true },
      { key: 'icon', value: '', label: '图标', type: 'text', required: true },
      { key: 'path', value: '', label: '路径', type: 'text', required: true },
      { key: 'sortNo', value: '', label: '排序编号', type: 'text', required: true },
      { key: 'operator', value: '', label: '操作人', type: 'text', required: true },
      { key: 'status', value: '0', label: '状态', type: 'radio', required: true, options: [{ label: '启用', value: '0' }, { label: '禁用', value: '1' }] }
    ]

    const addModel = this.modalService.create(
      {
        nzTitle: '添加菜单',
        nzContent: ModelFormComponent,
        nzFooter: null,
        nzClosable: false,
        nzComponentParams: {
          form
        }
      }
    )
  }

  collapse(array: Menu[], data: Menu, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: Menu): Menu[] {
    const stack: Menu[] = [];
    const array: Menu[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: Menu, hashMap: { [key: string]: boolean }, array: Menu[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

}
