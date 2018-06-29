<template>
	<div class="panelBox no-padding-bottom">
        <div class="panelHeader">
            <i></i>
            <div><img src="../assets/imgs/bigDipper_171124_11.png">特色内容</div>
            <router-link class="more" :to="{path:'/resourceModul/resource'}" target="_blank"></router-link>
        </div>
        <div class="panelBody">
            <div class="row">
               <div class="col-xs-12 col-sm-6" v-for="(item,i) in data">
                   <div class="teseBox">
                        <div class="teseHeader">
                            <router-link :title="item.title"
														:to="{name:'resource', params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
								            date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}" target="_blank">
															{{item.title}}
														</router-link>
                        </div>
                        <div class="teseBody">
                            <img :src="item.url">
                        </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  	data () {
    	return {
				data: ''
    	}
  	},
		created() {
			axios.get('/index/chart_con').then(
				res => {
					if(res.data.code == 0){
						this.data = res.data.data;
					}
				}
			)
		}
}
</script>

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
