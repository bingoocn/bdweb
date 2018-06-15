const menuList = [{
  name: '首页',
  path: '/home',
  mId: '1'
},{
  name: '新闻',
  path: '/news/newsCenter',
  mId: '21',
  children: [
    {
      path: '/news/newsCenter',
      name: '新闻中心',
      mId: '21'
    },
    {
      path: '/news/official_notice',
      name: '官方公告',
      mId: '22'
    },
    {
      path: '/news/industry_dynamics',
      name: '行业动态',
      mId: '23'
    },
    {
      path: '/news/international_dynamics',
      name: '国际动态',
      mId: '24'
    }
  ]
},{
  name: '系统',
  path: '/systemModul/system',
  mId: '31',
  children: [
    {
      path: '/systemModul/system',
      name: '系统介绍',
      mId: '31'
    },
    {
      path: '/systemModul/system',
      name: '基准站分布',
      mId: '32'
    },
    {
      path: '/systemModul/system',
      name: '国家数据综合处理系统',
      mId: '33'
    },
    {
      path: '/systemModul/system',
      name: '监测评估（月报）',
      mId: '34'
    },
    {
      path: '/systemModul/system',
      name: '官方下载',
      mId: '35'
    }
  ]
},{
  name: '应用',
  path: '/applicationModul/application',
  mId: '41',
  children: [
    {
      path: '/applicationModul/application',
      name: '交通',
      mId: '41'
    },
    {
      path: '/applicationModul/application',
      name: '测绘',
      mId: '42'
    },
    {
      path: '/applicationModul/application',
      name: '气象',
      mId: '43'
    },
    {
      path: '/applicationModul/application',
      name: '地震',
      mId: '44'
    },
    {
      path: '/applicationModul/application',
      name: '国土资源',
      mId: '45'
    },
    {
      path: '/applicationModul/application',
      name: '高精度民用',
      mId: '46'
    }
  ]
},{
  name: '政策支持',
  path: '/policyModul/policy',
  mId: '51',
  children: [
    {
      path: '/policyModul/policy',
      name: '标准',
      mId: '51'
    },
    {
      path: '/policyModul/policy',
      name: '政策法规',
      mId: '52'
    },
    {
      path: '/policyModul/policy',
      name: '知识产权',
      mId: '53'
    }
  ]
},{
  name: '特色内容',
  path: '/resourceModul/resource',
  mId: '61',
  children: [
    {
      path: '/resourceModul/resource',
      name: '北斗科普',
      mId: '61'
    },
    {
      path: '/resourceModul/resource',
      name: '北斗图片',
      mId: '62'
    },
    {
      path: '/resourceModul/resource',
      name: '北斗视频',
      mId: '63'
    },
    {
      path: '/resourceModul/resource',
      name: '兵器介绍',
      mId: '64'
    }
  ]
},{
  name: '帮助',
  path: '/helpModul/help',
  mId: '71',
  children: [
    {
      path: '/helpModul/help',
      name: '常见问题',
      mId: '71'
    },
    {
      path: '/helpModul/help',
      name: '联系我们',
      mId: '72'
    },
    {
      path: '/helpModul/help',
      name: '友情链接',
      mId: '73'
    }
  ]
}];
export default menuList
