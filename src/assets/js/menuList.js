const menuList = [{
  name: '首页',
  path: '/home',
  mId: '1'
},{
  name: '新闻',
  path: '/newsModul/news',
  mId: '21',
  children: [
    {
      path: '/newsModul/news',
      name: '新闻中心',
      mId: '01'
    },
    {
      path: '/newsModul/official_notice',
      name: '官方公告',
      mId: '02'
    },
    {
      path: '/newsModul/industry_dynamics',
      name: '行业动态',
      mId: '03'
    },
    {
      path: '/newsModul/international_dynamics',
      name: '国际动态',
      mId: '04'
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
      mId: '01',
      type: '2'
    },
    {
      path: '/systemModul/datumStation',
      name: '基准站分布',
      mId: '02',
      type: '2'
    },
    {
      path: '/systemModul/dataProce',
      name: '国家数据综合处理系统',
      mId: '03',
      type: '2'
    },
    {
      path: '/systemModul/monthReport',
      name: '监测评估',
      mId: '04'
    },
    {
      path: '/systemModul/officialDownload',
      name: '官方下载',
      mId: '05'
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
      mId: '01',
      type: '2'
    },
    {
      path: '/applicationModul/mapping',
      name: '测绘',
      mId: '02',
      type: '2'
    },
    {
      path: '/applicationModul/weather',
      name: '气象',
      mId: '03',
      type: '2'
    },
    {
      path: '/applicationModul/earthquake',
      name: '地震',
      mId: '04',
      type: '2'
    },
    {
      path: '/applicationModul/landResources',
      name: '国土资源',
      mId: '05',
      type: '2'
    },
    {
      path: '/applicationModul/civil',
      name: '高精度民用',
      mId: '06',
      type: '2'
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
      mId: '01'
    },
    {
      path: '/policyModul/standard',
      name: '政策法规',
      mId: '02'
    },
    {
      path: '/policyModul/regulations',
      name: '知识产权',
      mId: '03'
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
      mId: '01'
    },
    {
      path: '/resourceModul/bd_pic',
      name: '北斗图片',
      mId: '03'
    },
    {
      path: '/resourceModul/bd_video',
      name: '北斗视频',
      mId: '04'
    },
    {
      path: '/resourceModul/bd_introduce',
      name: '兵器介绍',
      mId: '02'
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
      mId: '01'
    },
    {
      path: '/helpModul/contactus',
      name: '联系我们',
      mId: '02'
    },
    {
      path: '/helpModul/friendship_link',
      name: '友情链接',
      mId: '03'
    }
  ]
}];
export default menuList
