import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import point_collection from "@/components/point_collection";

Vue.use(VueRouter)

export default new VueRouter ({
  routes:[
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path:'/point_collection',
    name:'point_collection',
    component: point_collection,
  }
  ]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router
