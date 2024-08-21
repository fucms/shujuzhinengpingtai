import Layout from '@/layout'

const tableListRouter = {
  path: '/tableList',
  component: Layout,
  redirect: '/alh_tableList/index.vue',
  meta: {
    title: '数据管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'alh_tableList',
      component: () => import('@/views/alh_tableList/index.vue'),
      name: 'alh_tableList',
      meta: { title: '数据信息可视化' }
    }
  ]
}

export default tableListRouter
