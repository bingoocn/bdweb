import Mock from 'mockjs'
import news from '../src/assets/data/news.json'

import system from '../src/assets/data/system.json'
import monthReport from '../src/assets/data/monthReport.json'
import officialDownload from '../src/assets/data/officialDownload.json'
import application from '../src/assets/data/application.json'

import policy from '../src/assets/data/policy.json'

import resource from '../src/assets/data/resource.json'
import bd_pic from '../src/assets/data/bd_pic.json'
import bd_video from '../src/assets/data/bd_video.json'

import question from '../src/assets/data/question.json'
import friendship_link from '../src/assets/data/friendship_link.json'

import content from '../src/assets/data/content.json'
// 匹配任意 /字母/字母/数字类型的接口 >> /^\/s([a-z]+\/){2,9}[0-9]+$/

// 新闻列表
Mock.mock('/newsModul/news', {
  code: 0,
  codeMsg: '成功',
  data: news
})

// 政策支持
Mock.mock('/policyModul/policy', {
  code: 0,
  codeMsg: '成功',
  data: policy
})

// 系统介绍 ~ 数据综合处理系统
Mock.mock(/^\/system\/content\/[0-9]+$/,'get',function(options){
    var id = options.url.split("/")[3]
    var index;
    for(var i in system){
        if(system[i].itemType===id){
            index=i
            break;
        }
    }
    const data = {
      code: 0,
      codeMsg: '成功',
      data: system[index],

    }
    return data;
})

// 监测评估（月报）
Mock.mock('/system/listEvaluation', {
  code: 0,
  codeMsg: '成功',
  data: monthReport
})

// 官方下载
Mock.mock('/system/listDownload', {
  code: 0,
  codeMsg: '成功',
  data: officialDownload
})

// 应用
Mock.mock(/^\/applicable\/content\/[0-9]+$/,'get',function(options){
    var id = options.url.split("/")[3]
    var index;
    for(var i in application){
        if(application[i].itemType===id){
            index=i
            break;
        }
    }
    const data = {
      code: 0,
      codeMsg: '成功',
      data: application[index],

    }
    return data;
})

// 北斗科普
Mock.mock('/resourceModul/resource', {
  code: 0,
  codeMsg: '成功',
  data: resource
})

// 北斗图片
Mock.mock('/resourceModul/bd_pic', {
  code: 0,
  codeMsg: '成功',
  data: bd_pic
})

// 北斗视频
Mock.mock('/resourceModul/bd_video', {
  code: 0,
  codeMsg: '成功',
  data: bd_video
})

// 常见问题
Mock.mock('/helpModul/question', {
  code: 0,
  codeMsg: '成功',
  data: question
})

// 友情链接
Mock.mock('/helpModul/friendship_link', {
  code: 0,
  codeMsg: '成功',
  data: friendship_link
})

// 所有详情页
Mock.mock('/unified/content', {
  code: 0,
  codeMsg: '成功',
  data: content
})









//
