
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'div1' , component: () => import('pages/Index.vue') , props: {section: '0'}},
      { path: 'div2' , component: () => import('pages/Index.vue') , props: {section: '1'}},
      { path: 'div3' , component: () => import('pages/Index.vue') , props: {section: '2'}},
    ]
  } ,

  {
    path: '/user',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '', component: () => import('pages/Profile.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
