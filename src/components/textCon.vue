<template lang="html">
  <div class="row margin-top-10">
      <div class="col-sm-12">
          <div class="listCon">
              <div class="listHeader">
                  <crumbs-con></crumbs-con>
              </div>
              <div class="listBody">
                  <div class="articleCon" >
                      <div class="articleTitle">{{ data.title }}</div>
                      <div class="articleSubtitle">
                          <div class="row">
                              <div class="col-sm-6 col-md-3"><span>来源：{{ data.source }}</span></div>
                              <div class="col-sm-6 col-md-3"><span>作者：{{ data.author }}</span></div>
                              <div class="col-sm-6 col-md-3"><span>编辑：{{ data.editor }}</span></div>
                              <div class="col-sm-6 col-md-3"><span>发布时间：{{ data.publishDate }}</span></div>
                          </div>
                      </div>
                      <div class="articleContent">
                          <editor-modul :data = 'data'></editor-modul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import editorModul from '@/components/editor'
import { getNewsDetail } from '@/axios/api'
import { getPicDetail } from '@/axios/api'
import { getVideoDetail } from '@/axios/api'
import { getScieDetail } from '@/axios/api'
import { getPolicyDetail } from '@/axios/api'
import { getHelpDetail } from '@/axios/api'

export default {
  data() {
    return {
      data: ''
    }
  },
  components: {
    editorModul
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      setTimeout(()=>{

        let lId = this.$route.params.date.split('_')[1];

        if(this.$route.name == "bd_pic"){
          getPicDetail(lId).then(res => {
            this.data = res.data;
          })
        }else if(this.$route.name == "bd_video"){
          getVideoDetail(lId).then(res => {
            this.data = res.data;
          })
        }else if(this.$route.name == "help"){
          getHelpDetail(lId).then(res => {
            this.data = res.data;
          })
        }else if(this.$route.name == "policy" || this.$route.name == "standard" || this.$route.name == "regulations"){
          getPolicyDetail(lId).then(res => {
            this.data = res.data;
          })
        }else if(this.$route.name == "bd_introduce" || this.$route.name == "resource"){
          getScieDetail(lId).then(res => {
            this.data = res.data;
          })
        }else{
          getNewsDetail(lId).then(res => {
            this.data = res.data;
          })
        }
      }, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
.mainBox {
  background-color: #fff;
  padding: 10px 20px 20px;
  min-height: 700px;
  .listHeader {
    p {
        display: inline-block;
        font-size: 24px;
        color: #333333;
        font-weight: bold;
    }
  }
  .listBody {
    background-color: #f5f5f5;
    padding: 0 20px 20px;
    .articleCon {
      padding: 78px 85px;
      .articleTitle {
        font-size: 26px;
        color: #000;
        text-align: center;
        margin-bottom: 28px;
      }
      .articleSubtitle {
        padding-bottom: 30px;
        border-bottom: 1px solid #d3d3d3;
        span {
          font-size: 14px;
          color: #888;
        }
      }
      .articleContent {
        margin-top: 40px;
        p {
          font-size: 16px;
          line-height: 36px;
          color: #333;
          text-indent: 2em;
        }
        img {
          height: 375px;
        }
      }
    }
  }
}
</style>
