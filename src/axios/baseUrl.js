'use strict'
const root = "dev"; // 开发环境使用dev，发布上线时改为pro

let api = '';
if (root === 'dev') {
  api = 'http://192.168.0.156:8081'; // 开发环境接口地址
} else if (root === 'pro') {
  api = 'http://192.168.0.156:8081'; // 生产环境接口地址
}

export default {
  getSearchList: `${api}/search/resultList`,

  getListSlide: `${api}/index/listSlidePicture`,

  getIndexList: `${api}/index/listNews`,

  getIndexListFeature: `${api}/index/listFeature`,

  getListNews: `${api}/news/listNews`,

  getNewsDetail: `${api}/news/newsDetail`,

  getSystem: `${api}/system/content`,

  getListEva: `${api}/system/listEvaluation`,

  getListDown: `${api}/system/listDownload`,

  getAppli: `${api}/applicable/content`,

  getPolicy: `${api}/policy/listPolicy`,

  getPolicyDetail: `${api}/policy/policyDetail`,

  getScience: `${api}/feature/listFeature`,

  getScieDetail: `${api}/feature/featureDetail`,

  getPicture: `${api}/feature/listPicture`,

  getPicDetail: `${api}/feature/pictureDetail`,

  getVideo: `${api}/feature/listVideo`,

  getVideoDetail: `${api}/feature/videoDetail`,

  getHelp: `${api}/help/listQuestion`,

  getHelpDetail: `${api}/help/questionDetail`,

  getFriendShip: `${api}/help/listFriendshipLink`,

  showResource: `${api}/common/show`,
}
