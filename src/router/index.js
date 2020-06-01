import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: ()=>import('../views/Home.vue'),
    children: [
      {
        path: "",
        name: "homeGlobal",
        component: ()=>import("../views/HomeGlobal.vue")
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('../views/Register')
  },
  {
    path:'/article/:slug',
    name:'article',
    component:()=>import('../views/Article.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
