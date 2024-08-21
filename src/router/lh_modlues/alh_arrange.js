import Layout from '@/layout'

const arrangeRouter = {
  path: '/arrange',
  component: Layout,
  redirect: '/alh_arrange/index.vue',
  meta: {
    title: '网关设备配置',
    icon: 'nested'
  },
  children: [
    {
      path: 'alh_arrange',
      component: () => import('@/views/alh_arrange/index.vue'),
      name: 'alh_arrange',
      meta: { title: '数据管理' }
    }
  ]
}

export default arrangeRouter
