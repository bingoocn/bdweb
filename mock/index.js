import Mock from 'mockjs'
import system from '../src/assets/data/system.json'
import monthReport from '../src/assets/data/monthReport.json'
import officialDownload from '../src/assets/data/officialDownload.json'
import application from '../src/assets/data/application.json'

// 系统介绍 ~ 数据综合处理系统
Mock.mock(/^\/s([a-z]+\/){2,9}[0-9]+$/,'get',function(options){
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
// 监测评估（月报）
Mock.mock('/system/listDownload', {
  code: 0,
  codeMsg: '成功',
  data: officialDownload
})
// 应用
Mock.mock(/^\/a([a-z]+\/){2,9}[0-9]+$/,'get',function(options){
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












//
