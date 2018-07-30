<template lang="html">
  <div class="listBody">
      <ul class="listUl">
          <li v-for="(item, i) in data.data" v-if="!data.openType">
            <router-link :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
            date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
              {{ item.title }}
            </router-link>
            <span>{{ item.publishDate }}</span>
          </li>
          <li v-for="(item, i) in data.data" v-if="data.openType && data.openType=='direct'">
            <a :href="item.url" target="_blank">
              {{ item.title }}
            </a>
            <span>{{ item.publishDate }}</span>
          </li>
      </ul>
      <page-list :countPage='data.countPage'></page-list>
  </div>
</template>

<script>

export default {
  props: {
    data:{
      default: '',
      required: true
    },
    toName:{
      type: String,
      default: '',
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.listBody {
    background-color: #f5f5f5;
    padding: 0 20px 20px;
    .listUl {
      list-style: none;
      padding: 0;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px dotted #c2c2c2;
        position: relative;
        a {
          display: inline-block;
          width: calc( 100% - 90px);
          font-size: 16px;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        a:hover, a:focus {
          color: #005db5;
        }
        span {
          position: absolute;
          right: 0;
          font-size: 15px;
          color: #888888;
        }
      }

    }
}
</style>
