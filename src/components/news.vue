<template>
	<div class="row">
        <div class="col-xs-12">
            <div class="panelBox">
                <div class="panelHeader">
                    <i></i>
                    <div><img src="../assets/imgs/bigDipper_171124_11.png">新闻</div>
                    <a @click="changeShow()"><router-link class="more" :to="{path:'/newsModul/news'}" target="_blank"></router-link></a>
                </div>
                <div class="panelBody">
                    <ul class="row newsTitle" role="tablist">
                        <li class="col-sm-4" v-for="(item, i) in paneData" :class = "[ i == 0 ? 'active' : '' ]"><a :href="'#'+item.id" role="tab" :code="item.code" @click="getData($event)" data-toggle="tab">{{ item.name }}</a><i></i></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane" v-for="(item, j) in paneData" :class = "[ j == 0 ? 'active' : '' ]" :id="item.id">
                            <div class="row ulWithImg" v-for="(item, i) in newsList.slice(0, 1)">
                                <div class="col-sm-2 imgBox"><img :src="newsList[0].imgSrc"></div>
                                <div class="col-sm-10 textBox">
                                    <p>
																			<router-link :title="item.title" :to="{name:item.pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
													            date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}" target="_blank">
																				{{item.title}}{{ j }}
																			</router-link>
																		</p>
                                    <span>
																			{{item.summary}}
																			<router-link :to="{name:item.pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
													            date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}" target="_blank">[详细]</router-link>
																		</span>
                                    <div class="textTime">{{item.publishDate}}</div>
                                </div>
                            </div>
                            <ul class="bscUl1">
                              <li v-for="(item,i) in newsList">
                                <router-link :title="newsList[i==0?1:i].title" class="leftA" :to="{name:item.pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
																date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}" target="_blank">
																	{{ newsList[i==0?1:i].title }}
																</router-link><span>{{ newsList[i==0?1:i].publishDate }}</span>
                            	</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const paneData = [
		{
			"id": "news",
			"code": "01",
			"name": "新闻中心"
		},{
			"id": "industry_dynamics",
			"code": "03",
			"name": "行业动态"
		},{
			"id": "international_dynamics",
			"code": "04",
			"name": "国际动态"
		}
];

export default {
  	data () {
    	return {
    		newsList: "",
				paneData: paneData
    	}
  	},
		inject: ['reload'],
		created() {
			this.getData()
		},
		methods:{
	    changeShow() {
	      this.reload();
	    },
			getData(e) {
				let code = "01";
				if(e != undefined) code = e.target.attributes.code.nodeValue;
				axios.get('/index/news_index/'+code+'').then(
          res => {
            if(res.data.code == 0){
              this.newsList = res.data.data;
							for(var i=0; i<paneData.length; i++){// 处理数据并添加路由name
								for(var j=0; j<res.data.data.length; j++){
									if(paneData[i].code == res.data.data[j].news_type){
										res.data.data[j].pathName = paneData[i].id;
									}
								}
							}
            }
          }
        )
			}
	  }
}
</script>

<style scoped>
	@import '../assets/css/common.css';
	.newsTitle{
	margin-top: 10px;
	margin-left: -5px;
	margin-right: -5px;
	overflow: hidden;
	padding-bottom:6px;
	padding-left: 0;
	border-bottom: none;
	}
	.newsTitle li{
		padding: 0 5px;
		float: left;
		position: relative;
		height:35px;
		text-align:center;
		line-height: 35px;
		font-size:18px;
		color:#333;
		cursor: pointer;
		transition: all .25s;
		-moz-transition: all .25s;	/* Firefox 4 */
		-webkit-transition: all .25s;	/* Safari å’Œ Chrome */
		-o-transition: all .25s;
	}
	.newsTitle li a{
		display: inline-block;
		width: 100%;
	    padding: 0 5px;
	    border:1px solid #e1e1e1;
	}
	.newsTitle li i{
		display:none;
		position: absolute;
		bottom:-6px;
		left:50%;
		margin-left: -4px;
		width:8px;
		height:5px;
		background:url("../assets/imgs/bigDipper_jt171124_03.png");
	}
	.newsTitle li.active i{
		display: block;
	}
	.newsTitle li:hover a{
		background-color: #fd6802;
	    color:#fff;
	}
	.newsTitle li.active a{
		background-color: #fd6802;
		border:1px solid #fd6802;
		color:#fff;
	}
	.ulWithImg{
	/*height: 139px;*/
	border-bottom: 1px dashed #e6e6e6;
	padding: 10px 0 18px;
	overflow: hidden;
	}
	.ulWithImg .imgBox{
		height: 100%;
	    text-align: center;
	}
	.ulWithImg .imgBox img{
		width: 98px;
		height: 104px;
		padding:2px;
	    border:1px solid #0d5183;
	}
	.ulWithImg .textBox{
		position: relative;
		height: 100%;
	}
	.ulWithImg .textBox p a{
		font-size:18px;
		color:#1a1a1a;
		white-space:normal;
	    /*overflow:hidden;
	    text-overflow:ellipsis;*/
	    display: block;
	    width:100%;
	    transition: all .2s;
		-moz-transition: all .2s;	/* Firefox 4 */
		-webkit-transition: all .2s;	/* Safari å’Œ Chrome */
		-o-transition: all .2s;
	}
	.ulWithImg .textBox p a:hover,.ulWithImg .textBox p a:focus{
		color: #284c93;
	}
	.ulWithImg .textBox span{
		/*height:69px;*/
		display: block;
		font-size:14px;
		color:#808080;
		line-height: 26px;
	    overflow: hidden;
	}
	.ulWithImg .textBox .textTime{
		position: absolute;
		bottom: 3px;
		right: 15px;
		color:#999;
		font-size:14px;
	}
</style>
