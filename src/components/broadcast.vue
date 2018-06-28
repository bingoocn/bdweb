<template>
	<div class="row">
	    <div class="col-xs-12">
	        <div id="picsShow" class="carousel slide" data-ride="carousel">
	            <ol class="carousel-indicators">
	                <li data-taret="picsShow" :data-slide-to="i" :class = "[ i == 0 ? 'active' : '' ]" v-for="(item, i) in data"></li>
	            </ol>

	            <div class="carousel-inner" role="listbox">
									<div class="item" :class = "[ i == 0 ? 'active' : '' ]" v-for="(item, i) in data" @click="changeShow()">
											<router-link :to="{name:item.pathName, params:{month:(item.publishDate.replace(/[^\d]/g,'')).slice(0,6),
					            date:'m'+item.publishDate.replace(/[^\d]/g,'')+'_'+item.fguid}}"  target="_blank" activeClass="active" exact>
												<img :src="item.imgUrl" alt="" data-holder-rendered="true">
											</router-link>
	                    <div class="carousel-caption">{{ item.title }}</div>
	                </div>
	            </div>

	            <a class="left carousel-control" href="#picsShow" role="button" data-slide="prev">
	                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	                <span class="sr-only">上一个</span>
	            </a>
	            <a class="right carousel-control" href="#picsShow" role="button" data-slide="next">
	                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	                <span class="sr-only">下一个</span>
	            </a>
	        </div>
	    </div>
	</div>
</template>

<script>
import menuList from '@/assets/js/menuList.js'
import axios from 'axios'

export default {
  	data () {
    	return {
				menuList: menuList,
				data: ''
    	}
  	},
		inject: ['reload'],
		methods:{
	    changeShow() {
	      this.reload();
	    }
	  },
		created() {
			setTimeout(()=>{
        axios.get('/index/pic_slide').then(
          res => {
            if(res.data.code == 0){
              this.data = res.data.data.pic_data;
							for(var k=0; k<this.data.length; k++){ // 处理数据并添加路由name
								for(var i=0; i<menuList.length; i++){
									if(menuList[i].children){
										for(var j=0; j<menuList[i].children.length; j++){
											if(this.data[k].name == menuList[i].children[j].name){
												this.data[k].pathName = menuList[i].children[j].path.split("/")[2];
											}
										}
									}
								}
							}
            }
          }
        )
      }, 5)
		}

}
</script>

<style>
	/*轮播图样式*/
	.carousel{
		height: 339px;
		padding: 10px;
	    background-color: #fff;
	}
	.carousel .carousel-inner{
		height: 100%;
	}
	.carousel .item{
		height: 100%;
	}
	.carousel .item a{
	    display: inline-block;
	    width: 100%;
	    height: 100%;
	}
	.carousel .item a img{
		width: 100%!important;
		height: 100%!important;
	}
	.carousel .carousel-caption{
		right: 0;
	    left: 0;
	    bottom: 0;
	    padding-top: 0;
	    padding-bottom: 0;
	    height: 42px;
	    line-height: 42px;
	    background: url("../assets/imgs/lunbotitlebg_03.png") repeat-x;
	    font-size: 16px;
	    text-align: left;
	    padding-left: 15px;
	}
	.carousel .carousel-indicators{
		left: auto;
		right: 25px;
		bottom: 10px;
		width: auto;
		margin-left: 0;
	}
</style>
