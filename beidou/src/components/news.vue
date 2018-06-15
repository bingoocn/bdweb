<template>
	<div class="row">
        <div class="col-xs-12">
            <div class="panelBox">
                <div class="panelHeader">
                    <i></i>
                    <div><img src="../assets/imgs/bigDipper_171124_11.png">{{title}}</div>
                    <router-link class="more" :to="linkto"></router-link>
                </div>
                <div class="panelBody">
                    <ul class="row newsTitle" role="tablist">
                        <li class="col-sm-4 active"><a href="#newsCenter" role="tab" data-toggle="tab">新闻中心</a><i></i></li>
                        <li class="col-sm-4"><a href="#hangyeDt" role="tab" data-toggle="tab">行业动态</a><i></i></li>
                        <li class="col-sm-4"><a href="#guojidt" role="tab" data-toggle="tab">国际动态</a><i></i></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane" :class="{'active':news.isActive}" :id="news.id" v-for="(news,i) in newsList">
                            <div class="row ulWithImg">
                                <div class="col-sm-2 imgBox"><img :src="news.imgSrc"></div>
                                <div class="col-sm-10 textBox">
                                    <p><router-link :title="news.articleTitle" :to="news.linkto">{{news.articleTitle}}</router-link></p>
                                    <span>{{news.article}}<router-link :to="news.linkto">[详细]</router-link></span>
                                    <div class="textTime">{{news.articleTime}}</div>
                                </div>
                            </div>
                            <ul class="bscUl1">
                                <li v-for="(item,i) in news.itemsList">
                                	<router-link :title="item.title" class="leftA" :to="item.linkto">{{item.title}}</router-link><span>{{item.time}}</span>
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
import imgSrc1 from '@/assets/imgs/W020180427403091077552.jpg'
import imgSrc2 from '@/assets/imgs/W020180330545713138884.png'
import imgSrc3 from '@/assets/imgs/W020180330545713138884.png'

export default {
  	data () {
    	return {
    		title:'新闻',
    		linkto:'/home',
    		newsList:[
    			{
    				id:'newsCenter',
    				isActive:true,
    				imgSrc:imgSrc1,
    				articleTitle:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    				article:'2018年4月24日至25日，第十二届莫斯科国际导航论坛在俄罗斯莫斯科举行在俄罗斯莫斯科举行在俄罗斯莫斯科举行。',
    				artticleTime:'04-27',
    				linkto:'/home',
    				itemsList:[
    					{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					}
    				]
    			},{
    				id:'hangyeDt',
    				isActive:false,
    				imgSrc:imgSrc2,
    				articleTitle:'国内开展首次基于低轨卫星导航增强在轨技术试验',
    				article:'近日，中国科学院光电研究院开展了基于低轨道卫星的导航信号增强在轨技术试验',
    				artticleTime:'03-30',
    				linkto:'/home',
    				itemsList:[
    					{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					}
    				]
    			},{
    				id:'guojidt',
    				isActive:false,
    				imgSrc:imgSrc3,
    				articleTitle:'印度成功发射导航卫星IRNSS-1I',
    				article:'近日，中国科学院光电研究院开展了基于低轨道卫星的导航信号增强在轨技术试验',
    				artticleTime:'03-30',
    				linkto:'/home',
    				itemsList:[
    					{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					},{
    						title:'中国代表团赴俄罗斯参加第十二届莫斯科国际导航论坛',
    						time:'04-18',
    						linkto:'/home'
    					}
    				]
    			}
    		]
    	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
