import { fetch } from './fetch'
import api from './baseUrl'

// 搜索列表
export function getSearchList (keyword, pageNumber, pageSize, startTime, endTime) {
  return fetch({
    url: api.getSearchList,
    method: 'post',
    params: {
      keyword: keyword,
      pageNumber: pageNumber,
      pageSize: pageSize,
      startTime: startTime,
      endTime: endTime
    }
  })
}
// 首页图片轮播列表
export function getListSlide () {
  return fetch({
    url: api.getListSlide,
    method: 'post'
  })
}
// 新闻、官方公告列表通用
export function getIndexList (code) {
  return fetch({
    url: api.getIndexList+'/'+code,
    method: 'post',
  })
}
// 新闻、官方公告列表通用
export function getIndexListFeature () {
  return fetch({
    url: api.getIndexListFeature,
    method: 'post',
  })
}

// 新闻中心接口
export function getListNews (ids, pageNumber, pageSize) {
  return fetch({
    url: api.getListNews+'/'+ids,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 新闻模块通用详情
export function getNewsDetail (fguid) {
  return fetch({
    url: api.getNewsDetail,
    method: 'post',
    params: {
      fguid: fguid,
    }
  })
}

// 系统模块通用详情
export function getSystem (ids) {
  return fetch({
    url: api.getSystem+'/'+ids,
    method: 'get'
  })
}

// 监测评估列表
export function getListEva (pageNumber, pageSize) {
  return fetch({
    url: api.getListEva,
    method: 'get',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 官方下载列表
export function getListDown (pageNumber, pageSize) {
  return fetch({
    url: api.getListDown,
    method: 'get',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 应用模块通用详情
export function getAppli (ids) {
  return fetch({
    url: api.getAppli+'/'+ids,
    method: 'get'
  })
}

// 政策支持列表通用
export function getPolicy (ids, pageNumber, pageSize) {
  return fetch({
    url: api.getPolicy+'/'+ids,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 政策支持详情
export function getPolicyDetail (ids) {
  return fetch({
    url: api.getPolicyDetail,
    method: 'post',
    params: {
      fguid: ids,
    }
  })
}

// 在线打开资源
export function showResource (ids) {
  return fetch({
    url: api.showResource+'/'+ids,
    method: 'get',
  })
}

// 北斗科普、兵器介绍列表
export function getScience (ids, pageNumber, pageSize) {
  return fetch({
    url: api.getScience+'/'+ids,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 北斗科普、兵器介绍详情
export function getScieDetail (ids) {
  return fetch({
    url: api.getScieDetail,
    method: 'post',
    params: {
      fguid: ids,
    }
  })
}

// 北斗图片列表
export function getPicture (pageNumber, pageSize) {
  return fetch({
    url: api.getPicture,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 北斗图片详情
export function getPicDetail (ids) {
  return fetch({
    url: api.getPicDetail,
    method: 'post',
    params: {
      fguid: ids,
    }
  })
}
// 北斗视频列表
export function getVideo (pageNumber, pageSize) {
  return fetch({
    url: api.getVideo,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 北斗视频详情
export function getVideoDetail (ids) {
  return fetch({
    url: api.getVideoDetail,
    method: 'post',
    params: {
      fguid: ids,
    }
  })
}

// 常见问题列表
export function getHelp (pageNumber, pageSize) {
  return fetch({
    url: api.getHelp,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}

// 常见问题详情
export function getHelpDetail (ids) {
  return fetch({
    url: api.getHelpDetail,
    method: 'post',
    params: {
      fguid: ids,
    }
  })
}

// 友情链接列表
export function getFriendShip (pageNumber, pageSize) {
  return fetch({
    url: api.getFriendShip,
    method: 'post',
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize
    }
  })
}
