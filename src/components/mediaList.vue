<template lang="html">
  <div class="listBody3">
      <div class="row">
          <div class="col-sm-6 col-md-4 margin-bottom-10" v-for="(item, i) in data.data">
              <div class="listImgCon">
                <router-link class="listImgBox" :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
                date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
                  <img :src = "item.url">
                </router-link>
                <p class="listImgP">
                  <router-link class="listImgBox" :to="{name:toName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
                  date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
                    <i v-if="toName=='bd_video'" class="fa fa-play-circle-o"></i> {{ item.title }}
                  </router-link>
                </p>
              </div>
          </div>
      </div>
      <page-list :countPage="data.countPage"></page-list>
  </div>
</template>

<script>
import pageList from '@/components/pageList'
import baseUrl from '@/axios/baseUrl'

export default {
  data() {
    return {
      showRecourse:""
    }
  },
  props: {
    data:{
      default: '',
    },
    toName: {
      type: String,
      default: '',
      required: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        this.showRecourse = baseUrl.showResource;
      }, 5)
    }
  },
  components: {
    pageList
  }
}
</script>
<style lang="css" src="@/assets/css/font-awesome.min.css"></style>
<style lang="scss" scoped>
.listImgCon {
  position: relative;
  .listImgBox {
    display: inline-block;
    height: 135px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .listImgP {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 35px;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    margin-bottom: 0;
    a {
      display: inline-block;
      width: 100%;
      height: 35px;
      line-height: 35px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 16px;
      color: #fff;
    }
  }
}
.listImgCon:hover{
  .listImgP {
    background-color: #005db5;
  }
}
</style>
