// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from '@/components/Custimers'
import About from '@/components/About'
import Edit from '@/components/Edit'
import VueCookie from 'vue-cookie'
import Add from '@/components/Add'
import CustimersDetails from '@/components/CustimersDetails'

import VueAxios from 'vue-axios'
import Axios from 'axios'
Vue.use(VueAxios,Axios)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookie)
// Vue.use(VueResource)
/* eslint-disable no-new */
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customer/:id",component:CustimersDetails},
    {path:"/edit/:id",component:Edit}
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用户管理系统</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link to="/add">添加用户</router-link></li>
          </ul>
          <ul class="nav navbar-right">
            <li class="active"><button class="btn" @click="Out()">退出</button></li>
          </ul>
          </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
    `,
    methods:{
      Out(){
          this.$cookie.delete('test')
      }
    }
}).$mount("#app")
