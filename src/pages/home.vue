<template lang="html">
  <div>
    <broadcast-box></broadcast-box>
    <div class="row margin-top-10">
      <div class="col-xs-12 col-md-7">
        <news-box></news-box>
        <chart-box title="星历星座" path="/home"></chart-box>
        <videos-box></videos-box>
      </div>
      <div class="col-xs-12 col-md-5">
        <div class="row">
          <div class="col-xs-12">
            <character-box></character-box>
            <notice-box title="官方公告" :hastop="true" :hasbottom="true" code="02"
            :param="{title:'官方公告',hastop:true,hasbottom:true,code:'02',slice:3}">
            </notice-box>
            <notice-box title="官方下载" :hastop="true" :hasbottom="false"
            :param="{title:'官方下载',hastop:true,hasbottom:false,path:'/system/listDownload',slice:2}">
            </notice-box>
          </div>
        </div>
        <chart-box title="监测评估" path="/home"></chart-box>
        <div class="row margin-top-10">
          <div class="col-xs-12">
            <notice-box title="常见问题" :hastop="false" :hasbottom="true"
            :param="{title:'常见问题',hastop:false,hasbottom:true,path:'/helpModul/question',slice:6}">
            </notice-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BroadcastBox from '../components/broadcast'
  import NewsBox from '../components/news'
  import ChartBox from '../components/chart'
  import VideosBox from '../components/videos'
  import CharacterBox from '../components/character'
  import NoticeBox from '../components/notice'


  export default{
    methods: {
      setParam(param) {
        return param;
      }
    },
    components: {
      BroadcastBox,NewsBox,ChartBox,VideosBox,CharacterBox,NoticeBox
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    div{
      color: white;
    }
  }
</style>
