<template lang="html">
  <div class="listBody4">
      <ul class="listUlPro">
          <li v-for = "(item, i) in data.data">
              <p class="proTitle">
                <router-link :title="item.title" :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
                date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
                  {{ item.title }}
                </router-link>
              </p>
              <div class="answer">{{ item.summary }}</div>
              <div class="bottomPro">
                  <router-link :title="item.title" :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
                  date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
                    查看详情
                  </router-link>
                  <span class="answerDate">{{ item.publishDate }}</span>
              </div>
          </li>
      </ul>
      <page-list :countPage="data.countPage"></page-list>
  </div>
</template>

<script>
import pageList from '@/components/pageList'

export default {
  props: {
    data:{
      default: '',
      required: true
    },
    toName: {
      type: String,
      default: '',
      required: true
    }
  },
  components: {
    pageList
  }
}
</script>

<style lang="scss" scoped>
.listUlPro {
  padding-left: 0;
  li {
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 10px;
    .proTitle {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #005db5;
    }
    .answer {
      font-size: 14px;
      color: #888;
      line-height: 25px;
      text-indent: 2em;
      background: url(../assets//imgs/bg_answer.png) no-repeat left 3px;
    }
    .bottomPro {
      position: relative;
      margin-top: 15px;
      a {
        color: #555;
        line-height: 15px;
      }
      .answerDate {
        position: absolute;
        right: 0;
        color: #888;
        font-size: 14px;
      }
    }
  }
}
</style>
