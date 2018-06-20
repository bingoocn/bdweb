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
                              <div class="col-sm-6 col-md-3"><span>发布时间：{{ data.relTime }}</span></div>
                          </div>
                      </div>
                      <div class="articleContent">
                          <!-- {{ data.content }} -->
                          <editor-modul :data = 'data'></editor-modul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import crumbsCon from '@/components/crumbs'
import editorModul from '@/components/editor'

export default {
  data() {
    return {
      data: ''
    }
  },
  components: {
    crumbsCon,
    editorModul
  },
  mounted() {
    const lId = this.$route.params.date.split('_')[1];
    const data = {
        title: '中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
        source: '北斗网',
        author: '王彬羽',
        editor: '陈彪',
        relTime: '2018-04-27',
        content: '<p>2018年4月24日至25日，第十二届莫斯科国际导航论坛在俄罗斯莫斯科举行。应俄罗斯国家航天集团邀请，中国卫星导航系统管理办公室及其国际合作中心、中俄兼容与互操作工作组、中俄联合应用工作组代表参加了本次论坛。</p><div class="text-center"><img src="http://localhost:8080/static/img/bigDipper_indexBanner_171123_01.70b758d.jpg"></div>'
    };
    this.data = data;
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
