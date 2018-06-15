import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import home from '@/pages/home'
import news from '@/pages/news'
import newsCenter from '@/pages/newsCenter/newsCenter'
import official_notice from '@/pages/newsCenter/official_notice'
import industry_dynamics from '@/pages/newsCenter/industry_dynamics'
import international_dynamics from '@/pages/newsCenter/international_dynamics'
// import conView from '@/pages/newsCenter/conView'
import textCon from '@/components/textCon'

import systemModul from '@/pages/system'
import system from '@/pages/system/system'

import applicationModul from '@/pages/application'
import application from '@/pages/application/application'

import policyModul from '@/pages/policy'
import policy from '@/pages/policy/policy'

import resourceModul from '@/pages/resource'
import resource from '@/pages/resource/resource'

import helpModul from '@/pages/help'
import help from '@/pages/help/help'

Vue.use(VueRouter)
const router =  new VueRouter({
  routes: [
    {
      path: '*',
      redirect(to) {
        if(to.path == '/'){
          return '/home'
        }
      }
    },
    {
      path: '/home',
      name: '首页',
      component: home
    },{
      path: '/news',
      name: '新闻',
      component: news,
      children: [
        {
          path: 'newsCenter',
          name: '新闻中心',
          component: newsCenter,
          children:[
            {
              path: ':month/:date.html',
              name: 'newsCenter',
              component: textCon
            },
          ]
        },
        {
          path: 'official_notice',
          name: '官方公告',
          component: official_notice,
          children:[
            {
              path: ':month/:date.html',
              name: 'official_notice',
              component: textCon
            },
          ]
        },
        {
          path: 'industry_dynamics',
          name: '行业动态',
          component: industry_dynamics,
          children:[
            {
              path: ':month/:date.html',
              name: 'industry_dynamics',
              component: textCon
            },
          ]
        },
        {
          path: 'international_dynamics',
          name: '国际动态',
          component: international_dynamics,
          children:[
            {
              path: ':month/:date.html',
              name: 'international_dynamics',
              component: textCon
            },
          ]
        }
      ]
    },{
      path: '/systemModul',
      name: '系统',
      component: systemModul,
      children: [
        {
          path: 'system',
          name: '系统介绍',
          component: system
        }
      ]
    },{
      path: '/applicationModul',
      name: '应用',
      component: applicationModul,
      children: [
        {
          path: 'application',
          name: '交通',
          component: application
        }
      ]
    },{
      path: '/policyModul',
      name: '政策支持',
      component: policyModul,
      children: [
        {
          path: 'policy',
          name: '标准',
          component: policy
        }
      ]
    },{
      path: '/resourceModul',
      name: '特色内容',
      component: resourceModul,
      children: [
        {
          path: 'resource',
          name: '北斗科普',
          component: resource
        }
      ]
    },{
      path: '/helpModul',
      name: 'helpModul帮助',
      component: helpModul,
      children: [
        {
          path: 'help',
          name: '常见问题',
          component: help
        }
      ]
    }
  ],
  mode: 'history'
})
// router.beforeEach(function(to, from, next){
//   if(to.matched[0].path === '/home'){
//     console.log("首页");
//     next();
//   }else if(to.matched[0].path === '/news'){
//     console.log("新闻");
//     next();
//   }else{
//     next();
//   }
//
// })
export default router
