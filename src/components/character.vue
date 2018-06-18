<template>
	<div class="panelBox no-padding-bottom">
        <div class="panelHeader">
            <i></i>
            <div><img src="../assets/imgs/bigDipper_171124_11.png">{{title}}</div>
            <router-link class="more" :to="linkto"></router-link>
        </div>
        <div class="panelBody">
            <div class="row">
               <div class="col-xs-12 col-sm-6" v-for="(item,i) in items">
                   <div class="teseBox">
                        <div class="teseHeader">
                            <router-link :to="linkto" :title="item.title">{{item.title}}</router-link>
                        </div>
                        <div class="teseBody">
                            <img :src="item.imgSrc">
                        </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import imgSrc1 from '@/assets/imgs/W020180330545713138884.png'
import imgSrc2 from '@/assets/imgs/W020180428427723316658.png'

export default {
  	data () {
    	return {
    		title:'特色内容',
            linkto:'/home',
            items:[{
                title:'什么是北斗地基增强系统?',
                imgSrc:imgSrc1,
                linkto:'/home'
            },{
                title:'北斗地基增强系统如何运作?',
                imgSrc:imgSrc2,
                linkto:'/home'
            }]
    	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../assets/css/common.css';
	.teseBox .teseHeader{
        height: 42px;
    }
    .teseBox .teseHeader a{
        display: inline-block;
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 16px;
        color: #1a1a1a;
        white-space: nowrap;
        text-overflow: hidden;
        overflow: hidden;
    }
    .teseBox .teseBody{
        height: 101px;
    }
    .teseBox .teseBody img{
        padding: 2px;
        border: 1px solid #0d5183;
        width: 100%;
        height: 100%;
    }
</style>
