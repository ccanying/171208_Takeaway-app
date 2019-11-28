import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/Msite',
      component: Msite,
      meta:{
        showFood:true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta:{
        showFood:true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta:{
        showFood:true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta:{
        showFood:true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Msite'
    }
  ]
})
