import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import home from '@/views/home'
import contentView from '@/components/contentView'
import textCon from '@/components/textCon'
import pdfCon from '@/components/pdf'


Vue.use(VueRouter)

const router =  new VueRouter({
  mode: 'history',
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
      component: resolve => require(['@/views/home'], resolve),
    },{
      path: '/search',
      name: '搜索',
      component: resolve => require(['@/views/search'], resolve),
    },{
      path: '/newsModul',
      name: '新闻',
      component: contentView,
      children: [
        {
          path: 'news',
          name: '新闻中心',
          component: resolve => require(['@/views/newsCenter/newsCenter'], resolve),
          children:[
            {
              path: ':month/:date.html',
              name: 'news',
              component: textCon
            },
          ]
        },
        {
          path: 'official_notice',
          name: '官方公告',
          component: resolve => require(['@/views/newsCenter/official_notice'], resolve),
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
          component: resolve => require(['@/views/newsCenter/industry_dynamics'], resolve),
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
          component: resolve => require(['@/views/newsCenter/international_dynamics'], resolve),
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
      component: contentView,
      children: [
        {
          path: 'system',
          name: '系统介绍',
          component: resolve => require(['@/views/system/system'], resolve),
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
          component: resolve => require(['@/views/system/datumStation'], resolve),
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
          component: resolve => require(['@/views/system/dataProce'], resolve),
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
          component: resolve => require(['@/views/system/monthReport'], resolve),
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
          component: resolve => require(['@/views/system/officialDownload'], resolve),
          children:[
            {
              path: ':month/:date.html',
              name: 'officialDownload',
              component: pdfCon
            },
          ]
        }
      ]
    },{
      path: '/applicationModul',
      name: '应用',
      component: contentView,
      children: [
        {
          path: 'application',
          name: '交通',
          component: resolve => require(['@/views/application/application'], resolve),
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
          component: resolve => require(['@/views/application/mapping'], resolve),
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
          component: resolve => require(['@/views/application/weather'], resolve),
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
          component: resolve => require(['@/views/application/earthquake'], resolve),
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
          component: resolve => require(['@/views/application/landResources'], resolve),
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
          component: resolve => require(['@/views/application/civil'], resolve),
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
      component: contentView,
      children: [
        {
          path: 'policy',
          name: '标准',
          component: resolve => require(['@/views/policy/policy'], resolve),
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
          component: resolve => require(['@/views/policy/standard'], resolve),
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
          component: resolve => require(['@/views/policy/regulations'], resolve),
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
      component: contentView,
      children: [
        {
          path: 'resource',
          name: '北斗科普',
          component: resolve => require(['@/views/resource/resource'], resolve),
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
          component: resolve => require(['@/views/resource/bd_pic'], resolve),
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
          component: resolve => require(['@/views/resource/bd_video'], resolve),
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
          component: resolve => require(['@/views/resource/bd_introduce'], resolve),
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
      name: '帮助',
      component: contentView,
      children: [
        {
          path: 'help',
          name: '常见问题',
          component: resolve => require(['@/views/help/help'], resolve),
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
          component: resolve => require(['@/views/help/contactus'], resolve),
        },{
          path: 'friendship_link',
          name: '友情链接',
          component: resolve => require(['@/views/help/friendship_link'], resolve),
        }
      ]
    }
  ]
})

export default router
