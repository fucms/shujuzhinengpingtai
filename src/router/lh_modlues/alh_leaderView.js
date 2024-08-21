import Layout from '@/layout'

const leaderRouter = {
  path: '/arrange',
  component: Layout,
  redirect: '/alh_leaderView/index.vue',
  meta: {
    title: '网关设备配置',
    icon: 'nested'
  },
  children: [
    {
      path: 'alh_leaderView',
      component: () => import('@/views/alh_leaderView/index.vue'),
      name: 'alh_leaderView',
      meta: { title: '领导视窗' }
    }
  ]
}

export default leaderRouter
