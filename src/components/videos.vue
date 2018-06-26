<template>
	<div class="row margin-top-10">
        <div class="col-xs-12">
            <div class="panelBox" id="videosList">
                <div class="panelHeader">
                    <i></i>
                    <div><img src="../assets/imgs/bigDipper_171124_11.png">{{title}}</div>
                    <router-link class="more" :to="linkto"></router-link>
                </div>
                <div class="panelBody">
                    <div class="row margin-top-10">
                        <div class="col-sm-6 margin-top-10">
                            <a class="vBoxA"><img class="imgLg" :src="mainImgSrc"></a>
                            <p class="vBoxP" :title="mainVideoTitle">{{mainVideoTitle}}</p>
                        </div>
                        <div class="col-sm-6">
                            <div class="row margin-top-10" v-for="(video,i) in videosList" :key="i">
                                <div class="col-xs-6" v-for="(cvideo,ci) in video.cvideosList" :key="cvideo.ci">
                                    <router-link class="vBoxA" :to="cvideo.linkto"><img class="imgSm" :src="cvideo.imgSrc"></router-link>
                                    <p class="vBoxP" :title="cvideo.title">{{cvideo.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import imgSrc from '@/assets/imgs/videoBg.png'

export default {
  	data () {
    	return {
    		title:'视频',
            linkto:'/home',
            mainImgSrc:imgSrc,
            mainVideoTitle:'北斗宣传片《梦想的方向》',
            videosList:[{
                cvideosList:[{
                    title:'首个海外北斗中心落成运行',
                    imgSrc:imgSrc,
                    linkto:'/home'
                },{
                    title:'第30、31颗北斗卫星发射',
                    imgSrc:imgSrc,
                    linkto:'/home'
                }]},{
                cvideosList:[{
                    title:'第28、29颗北斗卫星发射',
                    imgSrc:imgSrc,
                    linkto:'/home'
                },{
                    title:'第26、27颗北斗卫星发射',
                    imgSrc:imgSrc,
                    linkto:'/home'
                }]}
            ]
    	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../assets/css/common.css';
	#videosList .row {
	    margin-right: -5px;
	    margin-left: -5px;
	}
	#videosList .col-xs-1, #videosList .col-sm-1, #videosList .col-md-1, #videosList .col-lg-1, #videosList .col-xs-2, #videosList .col-sm-2, #videosList .col-md-2, #videosList .col-lg-2, #videosList .col-xs-3, #videosList .col-sm-3, #videosList .col-md-3, #videosList .col-lg-3, #videosList .col-xs-4, #videosList .col-sm-4, #videosList .col-md-4, #videosList .col-lg-4, #videosList .col-xs-5, #videosList .col-sm-5, #videosList .col-md-5, #videosList .col-lg-5, #videosList .col-xs-6, #videosList .col-sm-6, #videosList .col-md-6, #videosList .col-lg-6, #videosList .col-xs-7, #videosList .col-sm-7, #videosList .col-md-7, #videosList .col-lg-7, #videosList .col-xs-8, #videosList .col-sm-8, #videosList .col-md-8, #videosList .col-lg-8, #videosList .col-xs-9, #videosList .col-sm-9, #videosList .col-md-9, #videosList .col-lg-9, #videosList .col-xs-10, #videosList .col-sm-10, #videosList .col-md-10, #videosList .col-lg-10, #videosList .col-xs-11, #videosList .col-sm-11, #videosList .col-md-11, #videosList .col-lg-11, #videosList .col-xs-12, #videosList .col-sm-12, #videosList .col-md-12, #videosList .col-lg-12 {
	    padding-right: 5px;
	    padding-left: 5px;
	}
	.vBoxA{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.vBoxA img.imgLg{
		width: 100%;
		height: 219px;
	}
	.vBoxA img.imgSm{
		width: 100%;
		height: 104.5px;
	}
	.vBoxP{
		width: calc(100% - 10px);
		height:32px;
		position: absolute;
		left: 0px;
		bottom:0px;
		z-index: 1;
		background:url("../assets/imgs/bigDipperzhuntiB_03.png") repeat-x;
	    padding:0 10px;
	    margin: 0 5px;
	    font-size: 16px;
	    line-height: 32px;
	    color:#fff;
	    white-space:nowrap;
	    overflow:hidden;
	    text-overflow:ellipsis;
	}
</style>
