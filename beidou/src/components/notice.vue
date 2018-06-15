<template>
	<div class="panelBox" v-bind:class="{ 'no-padding-top':hastop,'no-padding-bottom': hasbottom }">
        <div class="panelHeader">
            <i></i>
            <div><img src="../assets/imgs/bigDipper_171124_11.png">{{ title }}</div>
            <a class="more" href="#" target="_blank"></a>
        </div>
        <div class="panelBody">
            <ul class="bscUl1" v-for="(data, i) in data" v-if="data.name == title">
                {{data.isA}}
                <li v-for="(item, i) in data.data"><router-link :class="{'leftA':item.isA,'leftB':item.isB}" :to="item.path">{{ item.title }}</router-link><span v-show="item.isA">{{ item.time }}</span></li>
                }
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  	data () {
    	return {
            data: [{
                name: '官方公告',
                data: [{
                    title: '北斗地基增强系统如何运作？1',
                    isA:true,
                    path: '/home',
                    time: '04-18'
                },{
                    title: '北斗地基增强系统如何运作？2',
                    isA:true,
                    path: '/home',
                    time: '04-18'
                },{
                    title: '北斗地基增强系统如何运作？3',
                    isA:true,
                    path: '/home',
                    time: '04-18'
                }]
            },{
                name: '官方下载',
                data: [{
                    title: '关于开展2018年度北斗卫星导航领域国家标准申报工作的通知1',
                    isA:true,
                    path: '/home',
                    time: '04-18'
                },{
                    title: '关于开展2018年度北斗卫星导航领域国家标准申报工作的通知2',
                    isA:true,
                    path: '/home',
                    time: '04-18'
                }]
            },{
                name: '常见问题',
                data: [{
                    title: '北斗项目的政府补助费用申请',
                    isB:true,
                    path: '/home'
                }]
            }]

    	}
  	},
    props:['title','hastop','hasbottom']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../assets/css/common.css';
</style>
