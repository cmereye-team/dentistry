/**
 * 路由的配置数据
 * */
const getRoutes = resolve => [
  // {
  //   path: '/',
  //   component: resolve('pages/index'),
  // },
  {
    path: '/',
    component: resolve('pages/new-home'),
  },
  {
    path: '/about-us',
    component: resolve('pages/about-us'),
  },
  {
    path: '/about',
    redirect: '/about-us',
    component: resolve('pages/about-us'),
    chunkName: 'pages/about-us',
  },
  {
    path: '/about_ENG',
    redirect: '/about-us',
    component: resolve('pages/about-us'),
    chunkName: 'pages/about-us',
  },
  // {
  // path: '/our-medical-team',
  // component: resolve('pages/our-medical-team'),

  // },
  // {
  //   path: '/implant',
  //   component: resolve('pages/implant'),
  // },
  {
    path: '/implant',
    component: resolve('pages/new-implant'),

  },
  // {
  //   path: '/rct',
  //   component: resolve('pages/rct'),
  // },
  {
    path: '/rct',
    component: resolve('pages/new-rct'),
  },
  // {
  //   path: '/invisalign',
  //   component: resolve('pages/invisalign'),
  // },
  {
      // 新版页面
    path: '/invisalign',
    component: resolve('pages/new-invisalign'),
  },
  // {
  //   path: '/invisalign-new',
  //   component: resolve('pages/invisalign-new'),
  // },
  // {
  //   path: '/veneers',
  //   component: resolve('pages/veneers'),
  // },
  {
    path: '/veneers',
    component: resolve('pages/new-veneers'),
  },
  {
    path: '/teeth-whitening',
    component: resolve('pages/teeth-whitening'),
  },
  {
    path: '/cosmetic',
    redirect: '/teeth-whitening',
    component: resolve('pages/teeth-whitening'),
    chunkName: 'pages/teeth-whitening',
  },
  {
    path: '/home',
    redirect: '/',
    component: resolve('pages/index'),
    chunkName: 'pages/index',
  },
  {
    path: '/advanced',
    redirect: '/implant',
    component: resolve('pages/implant'),
    chunkName: 'pages/implant',
  },
  // {
  //   path: '/contact',
  //   redirect: '/contact-us',
  //   component: resolve('pages/contact-us'),
  //   chunkName: 'pages/contact-us',
  // },
  // {
  //   path: '/contact_ENG',
  //   redirect: '/contact-us',
  //   component: resolve('pages/contact-us'),
  //   chunkName: 'pages/contact-us',
  // },
  {
    path: '/crowns-and-bridges',
    component: resolve('pages/crowns-and-bridges'),

  },
  {
    path: '/extractions-and-wisdom-teeth-extraction',
    component: resolve('pages/extractions-and-wisdom-teeth-extraction'),

  },
  {
    path: '/periodontal-treatment',
    component: resolve('pages/periodontal-treatment'),

  },

  {
    path: '/complete-and-partial-denture',
    component: resolve('pages/complete-and-partial-denture'),

  },
  {
    path: '/orthodontics',
    component: resolve('pages/orthodontics'),

  },
  // {
  //   path: '/scaling-and-polishing',
  //   component: resolve('pages/scaling-and-polishing'),

  // },
  {
    path:'/scaling-and-polishing',
    component: resolve('pages/new-scaling-and-polishing'),
  },
  {
    path: '/fillings',
    component: resolve('pages/fillings'),

  },
  {
    path: '/general-oral-examination',
    component: resolve('pages/general-oral-examination'),

  },
  {
    path: '/primary',
    redirect: '/general-oral-examination',
    component: resolve('pages/general-oral-examination'),
    chunkName: 'pages/general-oral-examination'
  },
  {
    path: '/children-dentistry',
    component: resolve('pages/children-dentistry'),

  },
  // {
  //   path: '/facilities',
  //   component: resolve('pages/facilities'),

  // },
  // {
  //   path: '/oral-health-information',
  //   component: resolve('pages/oral-health-information'),

  // },
  // {
  //   path: '/news',
  //   component: resolve('pages/news'),

  // },
  // {
  //   path: '/contact-us',
  //   component: resolve('pages/contact-us'),

  // },
  {
    path: '/contact-us',
    component: resolve('pages/new-contact-us'),
  },
  {
    path: '/policy',
    component: resolve('pages/policy'),

  },
  // {
  //   path: '/service',
  //   component: resolve('pages/service'),
  // },
  {
    path: '/service',
    component: resolve('pages/new-service'),
  },
  // {
  // path: '/weddingExpo',
  // component: resolve('pages/weddingExpo'),

  // },

  // {
  //     path: '*',
  //     redirect: '/',
  //     component: resolve('pages/index'),
  //     chunkName: 'pages/index',
  // },
];

// 导出
export default getRoutes;