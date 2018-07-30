<template>
	<div class="row margin-top-10">
        <div class="col-xs-12">
            <div class="panelBox">
                <div class="panelLeftHeader"><router-link :to="path">{{title}}</router-link></div>
                <div class="panelRightBody" v-for="(data, i) in data" v-if="data.name==title">
                    <router-link :to="data.path"><img :src="data.image"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import imgUrl1 from '@/assets/imgs/P0201712083434357.png'
import imgUrl2 from '@/assets/imgs/P02017046496543544.png'

export default {
  	data () {
    	return {
    		data:[{
                name:'星历星座',
                path:'/home',
                image:imgUrl1
            },{
                name:'监测评估',
                path:'/home',
                image:imgUrl2
            }]
    	}
  	},
    props:['title','path']
}
</script>

<style>
</style>
