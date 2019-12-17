import { Component, OnInit } from '@angular/core';
import { FormItem } from 'src/app/types/formItem';
import { NzModalService } from 'ng-zorro-antd';
import { ModelFormComponent } from '../../components/model-form/model-form.component';
import { Menu } from 'src/app/types/menu';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.less']
})
export class BlogMenuComponent implements OnInit {
  menus: Menu[] = [];


  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
  }


  add() {
    let form: FormItem[] = [
      { key: 'text', value: '', label: '菜单名称', type: 'text', required: true },
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

  edit(data: Menu) {

  }

  delete(id: number) {

  }
}
