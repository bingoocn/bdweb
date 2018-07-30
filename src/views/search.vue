<template lang="html">
  <div class="NY_centerBox">
        <div class="NY_SearchL" v-if="this.$route.matched.length!=2">
          <div class="title">按时间检索</div>
          <div class="ziXuan" style="margin-top:15px;">自选日期</div>
          <div class="advSearch_caidan_rili">
            <p>
              <datepicker class="advSearch_caidan_Itme" id="J-xl" type="startPicker" :allow="allow" :readonly="true" format="YYYY/MM/DD" width="45%" @get="pickDate"></datepicker>
              <span class="advSearch_caidan_Itme_span ">-</span>
              <datepicker class="advSearch_caidan_Itme" id="J-xl-2" type="endPicker" :allow="allow" :readonly="true" format="YYYY/MM/DD" width="45%" @get="pickDate"></datepicker>
            </p>
            <p>
              <router-link :to="{path:keyword==''?'':'/search', query:keyword==''?'':{keyword:keyword,pageNum:'1',page:'3',startTime:transformat(startDate),endTime:transformat(endDate)}}"
                :class = "[ allow ? 'timeBtn' : 'eventNone disabled' ]" activeClass="active" exact>
                确定
              </router-link>
            </p>
  		    </div>
        </div>
        <div class="NY_SearchR" v-if="this.$route.matched.length!=2">
           <div class="NY_Rtitle">
              <p>新闻检索</p>
           </div>
          <div class="Bd_searchBox">
              <div class="Bd_searchL">
                  <div class="Bd_searchLDiv">
                    <span class="bold">搜索结果：</span>找到 <span class="red">{{ data.totalElements }}</span> 条结果
                  </div>
              </div>
              <div class="Bd_searchR">
                 <input type="text" :value="keyword" class="search_right_input" @change="getVal($event)">
                 <span @click="goSearch">
                   <router-link :to="{path:keyword==''?'':'/search', query:keyword==''?'':{keyword:keyword,pageNum:'1',page:'3',startTime:transformat(startDate),endTime:transformat(endDate)}}" class="search_right_submit" activeClass="active" exact>
                     搜 索
                   </router-link>
                 </span>
              </div>
          </div>
    <div class="xzBox">
      <div class="cjwtBox" v-for="(item, i) in data.data">
        <p class="title"><editor-modul :data='item.title'></editor-modul></p>
        <div class="wen"><editor-modul :data='item.content'></editor-modul></div>
        <div class="bottomD">
          <router-link :to="{name:item.pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
          date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank">
            查看详情
          </router-link>
          <span class="time">{{ item.publishDate }}</span>
        </div>
      </div>
   </div>
   <page-list :countPage='data.countPage' pType="searchL"></page-list>
</div>
<router-view></router-view>
</div>
</template>

<script>
  import datepicker from '@/components/date-picker';
  import menuList from '@/assets/js/menuList.js'
  import { getSearchList } from '@/axios/api'
  import editorModul from '@/components/searchCon'

  export default {
    data(){
      return {
        data: '',
        keyword: '',
        startDate: '',
        endDate: '',
        allow: true
      }
    },
    components: { datepicker, editorModul },
    created() {
      if(this.$route.query.keyword){
        this.keyword = this.$route.query.keyword;
      }
      this.fetchData();// 获取数据
    },
    watch: {
      '$route': 'fetchData'
    },
    methods:{
      getVal(e){
        this.keyword = $.trim(e.target.value);
      },
      goSearch(){
        if(this.keyword == ""){
          alert("请输入关键字！")
          return;
        }else{
          this.keyword = this.keyword;
        }
      },
      pickDate(value) {

        value.name == 'startPicker' ? this.startDate = value.value : this.endDate = value.value;

        if(this.endDate && this.startDate > this.endDate){
          alert("结束日期不能小于起始日期！")
          this.allow = false;
          return;
        }else if(this.endDate && this.startDate > new Date()){
          alert("起始日期不能大于当前日期！")
          this.allow = false;
          return;
        }else if(this.endDate && this.endDate > new Date()){
          alert("结束日期不能大于当前日期！")
          this.allow = false;
          return;
        }else if(this.endDate){
          this.allow = true;
        }
      },
      transformat(str) {
        if(!str) return;
        return str.getFullYear()+'-'+((str.getMonth()+1)<10?'0'+(str.getMonth()+1):(str.getMonth()+1))+'-'+((str.getDate())<10?'0'+(str.getDate()):(str.getDate()));
      },
      fetchData() {
        setTimeout(()=>{
          let pageNumber = this.$route.query.pageNum == undefined ? 1 : this.$route.query.pageNum;
          getSearchList(this.keyword, pageNumber, 3, this.$route.query.startTime, this.$route.query.endTime).then(res => {
            this.data = res.data;
            for(var k=0; k<this.data.data.length; k++){
              for(var i=0; i<menuList.length; i++){
                if(menuList[i].children){
                  for(var j=0; j<menuList[i].children.length; j++){
                    if(this.data.data[k].menuItem == menuList[i].children[j].name){
                      if(menuList[i].children[j].type){
                        this.data.data[k].type = menuList[i].children[j].type;
                        this.data.data[k].pathName = menuList[i].children[j].path;
                      }else{
                        this.data.data[k].pathName = menuList[i].children[j].path.split("/")[2];
                      }
                    }
                  }
                }
              }
            }
          })
        }, 5)
      }
    }
  }
</script>

<style lang="scss" scoped>
.NY_centerBox {
    overflow: hidden;
    padding: 10px 20px 20px;
    background: #fff;
    .NY_SearchL {
      width: 20%;
      float: left;
      .title {
        padding: 10px 20px;
        background: #005db5;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
      }
      .SearchLUl {
        margin-bottom: 25px;
        li {
          line-height: 38px;
          height: 38px;
          padding: 0 22px;
          a {
            color: #666;
            font-size: 16px;
          }
        }
      }
      .ziXuan {
        padding: 10px 18px;
        background: #ededed;
        font-size: 16px;
        color: #999;
      }
      .advSearch_caidan_rili {
        text-align: center;
        margin: 15px 0;
        input {
          width: 45%;
          height: 32px;
          line-height: 32px;
          border: 1px solid #d5d5d5;
          padding: 0;
          padding-left: 5px;
        }
        .timeBtn {
          display:block;
          padding:5px 10px;
          background:#4f99c6;
          width:auto;
          color:#fff;
          font-size:14px;
          float:right;
          margin-right: 2px;
          cursor: pointer;
        }
        .eventNone{
          display:block;
          padding:5px 10px;
          width:auto;
          color:#fff;
          font-size:14px;
          float:right;
          margin-right: 2px;
          cursor: not-allowed;
          pointer-events:none;
          background: #ccc;
        }
      }
    }
    .NY_SearchR {
      width: 75%;
      float: right;
      .NY_Rtitle {
        padding-bottom: 15px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        margin-bottom: 15px;
        p {
          float: left;
          font-size: 24px;
          color: #333333;
          font-weight: bold;
        }
      }
      .Bd_searchBox {
        overflow: hidden;
        margin-bottom: 20px;
        .Bd_searchL {
          float: left;
          .Bd_searchLDiv {
            color: #333;
            margin-bottom: 10px;
            font-size: 16px;
            .bold {
              font-weight: bold;
            }
            .red {
              color: #d70000;
            }
            a {
              color: #333;
            }
          }
        }
        .Bd_searchR {
          float: right;
          overflow: hidden;
          input {
            float: left;
            width: 300px;
            height: 28px;
            line-height: 28px;
            padding: 0 15px;
            background: #f5f5f5;
            border-left: 1px solid #cbcaca;
            border-top: 1px solid #cbcaca;
            border-bottom: 1px solid #cbcaca;
          }
          a {
            float: left;
            display: block;
            width: 57px;
            border: 1px solid #005db5;
            height: 28px;
            text-align: center;
            line-height: 28px;
            font-size: 14px;
            color: #fff;
            background: #005db5;
            transition: all .2s;
            -moz-transition: all .2s;
            -webkit-transition: all .2s;
            -o-transition: all .2s;
          }
        }
      }
      .cjwtBox {
        padding: 20px;
        background: #f9f9f9;
        margin-bottom: 10px;
        .title {
          color: #555;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .wen {
          font-size: 14px;
          color: #888;
          line-height: 25px;
        }
        .bottomD {
          overflow: hidden;
          margin-top: 15px;
          .time {
            font-size: 14px;
            color: #888;
            float: right;
          }
          a {
            display: inline-block;
            float: left;
            padding-right: 30px;
            font-size: 14px;
            line-height: 15px;
            color: #555;
            transition: all .2s;
            -moz-transition: all .2s;
            -webkit-transition: all .2s;
            -o-transition: all .2s;
          }
        }
      }
    }
}
</style>
