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
import datumStation from '@/pages/system/datumStation'
import dataProce from '@/pages/system/dataProce'
import monthReport from '@/pages/system/monthReport'
import officialDownload from '@/pages/system/officialDownload'

import applicationModul from '@/pages/application'
import application from '@/pages/application/application'
import mapping from '@/pages/application/mapping'
import weather from '@/pages/application/weather'
import earthquake from '@/pages/application/earthquake'
import landResources from '@/pages/application/landResources'
import civil from '@/pages/application/civil'

import policyModul from '@/pages/policy'
import policy from '@/pages/policy/policy'
import standard from '@/pages/policy/standard'
import regulations from '@/pages/policy/regulations'


import resourceModul from '@/pages/resource'
import resource from '@/pages/resource/resource'
import bd_pic from '@/pages/resource/bd_pic'
import bd_video from '@/pages/resource/bd_video'
import bd_introduce from '@/pages/resource/bd_introduce'

import helpModul from '@/pages/help'
import help from '@/pages/help/help'
import contactus from '@/pages/help/contactus'
import friendship_link from '@/pages/help/friendship_link'

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
          component: system,
          children:[
            {
              path: ':month/:date.html',
              name: 'system',
              component: textCon
            },
          ]
        },
        {
          path: 'datumStation',
          name: '基准站分布',
          component: datumStation,
          children:[
            {
              path: ':month/:date.html',
              name: 'datumStation',
              component: textCon
            },
          ]
        },
        {
          path: 'dataProce',
          name: '国家数据综合处理系统',
          component: dataProce,
          children:[
            {
              path: ':month/:date.html',
              name: 'dataProce',
              component: textCon
            },
          ]
        },
        {
          path: 'monthReport',
          name: '监测评估（月报）',
          component: monthReport,
          children:[
            {
              path: ':month/:date.html',
              name: 'monthReport',
              component: textCon
            },
          ]
        },
        {
          path: 'officialDownload',
          name: '官方下载',
          component: officialDownload,
          children:[
            {
              path: ':month/:date.html',
              name: 'officialDownload',
              component: textCon
            },
          ]
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
          component: application,
          children:[
            {
              path: ':month/:date.html',
              name: 'application',
              component: textCon
            },
          ]
        },
        {
          path: 'mapping',
          name: '测绘',
          component: mapping,
          children:[
            {
              path: ':month/:date.html',
              name: 'mapping',
              component: textCon
            },
          ]
        },{
          path: 'weather',
          name: '气象',
          component: weather,
          children:[
            {
              path: ':month/:date.html',
              name: 'weather',
              component: textCon
            },
          ]
        },{
          path: 'earthquake',
          name: '地震',
          component: earthquake,
          children:[
            {
              path: ':month/:date.html',
              name: 'earthquake',
              component: textCon
            },
          ]
        },{
          path: 'landResources',
          name: '国土资源',
          component: landResources,
          children:[
            {
              path: ':month/:date.html',
              name: 'landResources',
              component: textCon
            },
          ]
        },{
          path: 'civil',
          name: '高精度民用',
          component: civil,
          children:[
            {
              path: ':month/:date.html',
              name: 'civil',
              component: textCon
            },
          ]
        },
      ]
    },{
      path: '/policyModul',
      name: '政策支持',
      component: policyModul,
      children: [
        {
          path: 'policy',
          name: '标准',
          component: policy,
          children:[
            {
              path: ':month/:date.html',
              name: 'policy',
              component: textCon
            },
          ]
        },{
          path: 'standard',
          name: '政策法规',
          component: standard,
          children:[
            {
              path: ':month/:date.html',
              name: 'standard',
              component: textCon
            },
          ]
        },{
          path: 'regulations',
          name: '知识产权',
          component: regulations,
          children:[
            {
              path: ':month/:date.html',
              name: 'regulations',
              component: textCon
            },
          ]
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
          component: resource,
          children:[
            {
              path: ':month/:date.html',
              name: 'resource',
              component: textCon
            },
          ]
        },{
          path: 'bd_pic',
          name: '北斗图片',
          component: bd_pic,
          children:[
            {
              path: ':month/:date.html',
              name: 'bd_pic',
              component: textCon
            },
          ]
        },{
          path: 'bd_video',
          name: '北斗视频',
          component: bd_video,
          children:[
            {
              path: ':month/:date.html',
              name: 'bd_video',
              component: textCon
            },
          ]
        },{
          path: 'bd_introduce',
          name: '兵器介绍',
          component: bd_introduce,
          children:[
            {
              path: ':month/:date.html',
              name: 'bd_introduce',
              component: textCon
            },
          ]
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
          component: help,
          children:[
            {
              path: ':month/:date.html',
              name: 'help',
              component: textCon
            },
          ]
        },{
          path: 'contactus',
          name: '联系我们',
          component: contactus,
          children:[
            {
              path: ':month/:date.html',
              name: 'contactus',
              component: textCon
            },
          ]
        },{
          path: 'friendship_link',
          name: '友情链接',
          component: friendship_link,
          children:[
            {
              path: ':month/:date.html',
              name: 'friendship_link',
              component: textCon
            },
          ]
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
