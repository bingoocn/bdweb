<template>
	<div class="panelBox" v-bind:class="{ 'no-padding-top':param.hastop,'no-padding-bottom': param.hasbottom }">
        <div class="panelHeader">
            <i></i>
            <div><img src="../assets/imgs/bigDipper_171124_11.png">{{ param.title }}</div>
						<router-link class="more" :to="{path:path}" target="_blank"></router-link>
        </div>
        <div class="panelBody">
            <ul class="bscUl1">
                <li v-for="(item, i) in data.slice(0,param.slice)">
									<router-link class="leftA" :to="{name:pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
									date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank" activeClass="active" exact>
										{{ item.title }}
									</router-link>
									<span>{{ item.publish_date }}</span>
								</li>
            </ul>
        </div>
    </div>
</template>

<script>
import menuList from '@/assets/js/menuList.js'
import axios from 'axios'

export default {
  	data () {
    	return {
            data: '',
						path: '',
						pathName: '',
						menuList: menuList
    	}
  	},
		created() {
			this.setPathName();
			this.getData();
		},
		methods: {
			setPathName() { //设置点击更多处路由路径
				for(var i=0; i<menuList.length; i++){
					if(menuList[i].children){
						for(var j=0; j<menuList[i].children.length; j++){
							if(menuList[i].children[j].name == this.param.title){
								this.path = menuList[i].children[j].path;
								this.pathName = menuList[i].children[j].path.split("/")[2];
							}
						}
					}
				}
			},
			getData() {
				let code = this.param.code;
				if(code){
					axios.get('/index/news_index/'+code+'').then( //需要code传值
	          res => {
	            if(res.data.code == 0){
								this.data = res.data.data;
	            }
	          }
	        )
				}else{
					axios.get(this.param.path).then(
	          res => {
	            if(res.data.code == 0){
								this.data = res.data.data;
	            }
	          }
	        )
				}
			}
		},
    props:['param']
}
</script>

<style scoped>
	@import '../assets/css/common.css';
</style>
