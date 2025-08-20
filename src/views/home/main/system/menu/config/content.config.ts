import type { IPageContentConfig } from "@/components/page/type"
import { h } from "vue"

const contentConfig: IPageContentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTxt: '新建菜单',
  },
  tableProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children',
    }
  },
  columnList: [
    { label: '', width: '60px', align: 'center' },
    { type: 'normal', label: '菜单名称', prop: 'name', width: '120px', align: 'center' },
    { type: 'custom', label: '菜单级别', prop: 'type', width: '120px', align: 'center', slot: 'selectOption' },
    { type: 'normal',label: '菜单路径', prop: 'url', width: '180px', align: 'center' },
    { type: 'normal',label: '菜单图标', prop: 'icon', width: '120px', align: 'center' },
    { type: 'normal',label: '排序', prop: 'sort', width: '60px', align: 'center' },
    { type: 'datetime', label: '创建时间', prop: 'createAt', align: 'center' },
    { type: 'datetime', label: '更新时间', prop: 'updateAt', align: 'center' },
    { type: 'operation', label: '操作', width: '280px', align: 'center' },
  ],
  pagination: {
    currentPage: 1,
    pageSize: 10,
  },
}

export default contentConfig
