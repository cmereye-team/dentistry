/**
 * 路由的配置数据
 * */
const getRoutes = resolve => [
  {
    path: '/',
    component: resolve('pages/new-home'),
  },
  {
    path: '/about-us',
    component: resolve('pages/about-us'),
  },

  {
    path: '/service',
    component: resolve('pages/new-service'),
  },

  {
    path: '/contact-us',
    component: resolve('pages/new-contact-us'),
  },
  {
    path: '/policy',
    component: resolve('pages/policy'),

  },

  {
    path: '/about',
    redirect: '/about-us',
    component: resolve('pages/about-us'),
    chunkName: 'pages/about-us',
  }
];

// 导出
export default getRoutes;