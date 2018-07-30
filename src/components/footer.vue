<template lang="html">
  <div class="footerBox">
    <div class="container">
        <!-- 友情链接 -->
        <div class="youqingLink">
            <div class="row">
                <div class="col-md-10">
                    <p class="youqingLinkP">友情链接</p>
                    <ul>
                      <li v-for="item in data">
                        <a :href="item.url" target="_blank">{{ item.title }}</a>
                      </li>
                  </ul>
                </div>
                <div class="col-md-2">
                    <a><img src=""></a>
                </div>
            </div>
        </div>
        <!-- 版权所有 -->
        <div class="copyright">
            <div class="row">
                <div class="col-xs-12 col-md-12">
                    <div class="cright text-center">
                        <span>©北斗地基增强系统网站&nbsp;&nbsp;版权所有</span>
                        <span>京ICP备05022684号-2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getFriendShip } from '../axios/api'

export default {
  name: 'Footer',
  data () {
    return {
      data:''
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(()=>{
        getFriendShip().then(res => {
          this.data = res.data.data;
        })
      }, 5)
    }
  },
}
</script>

<style lang="scss" scoped>
  .footerBox {
    width: 100%;
    background-image: url(../assets/imgs/bigDipper_footerBg.jpg);
    background-size: 100% 100%;
  }
  .youqingLink {
    padding: 20px 12px 15px;
    overflow: hidden;
    border-bottom: 1px solid #15608c;
  }
  .youqingLinkP {
    color: #97fcff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .youqingLink ul {
    overflow: hidden;
    white-space: nowrap;
    padding-left: 0;
  }
  .youqingLink ul li {
    white-space: nowrap;
    float: left;
    display: inline;
    margin-right: 20px;
    margin-bottom: 15px;
  }
  .youqingLink ul li a {
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    color: #c2fefe;
    font-size: 16px;
    transition: all .25s;
    -moz-transition: all .25s;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
  }
  .copyright {
    margin: 15px 0 0;
    padding-bottom: 15px;
    overflow: hidden;
  }
  .copyrightUl {
    overflow: hidden;
    padding-left: 0;
  }
  .copyrightUl li {
    float: left;
  }
  .copyrightUl li a {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    transition: all .25s;
    -moz-transition: all .25s;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
  }
  .copyrightUl li span {
    display: inline-block;
    padding: 0 20px;
    color: #ccc;
  }
  .cright span {
    color: #ccc;
    padding-right: 45px;
  }
</style>
