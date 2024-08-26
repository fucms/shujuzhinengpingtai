import Layout from '@/layout'

const workingRouter = {
  path: '/working',
  component: Layout,
  redirect: '/alh_working/index.vue',
  meta: {
    title: '网关监控',
    icon: 'nested'
  },
  children: [
    {
      path: 'alh_working',
      component: () => import('@/views/alh_working/gateway/index.vue'),
      name: 'alh_working',
      meta: { title: '网关告警配置' }
    },
    {
      path: 'serveGateway',
      component: () => import('@/views/alh_working/serveGateway/index.vue'),
      name: 'serveGateway',
      meta: { title: '服务监控' }
    },
    {
      path: 'serveGaojing',
      component: () => import('@/views/alh_working/serveGaojing/index.vue'),
      name: 'serveGaojing',
      meta: { title: '服务告警' }
    },
    {
      path: 'abnormal',
      component: () => import('@/views/alh_working/abnormal/index.vue'),
      name: 'abnormal',
      meta: { title: '服务异常信息' }
    }
  ]
}

export default workingRouter
