<template>
	<div class="row">
	    <div class="col-xs-12">
	        <div id="picsShow" class="carousel slide" data-ride="carousel">
	            <ol class="carousel-indicators">
	                <li data-taret="picsShow" data-slide-to="0" class="active"></li>
	                <li data-taret="picsShow" data-slide-to="1"></li>
	                <li data-taret="picsShow" data-slide-to="2"></li>
	            </ol>

	            <div class="carousel-inner" role="listbox">
	                <div class="item active">
	                    <a><img src="../assets/imgs/W020171224607166636546.jpg" alt=""></a>
	                    <div class="carousel-caption">北斗卫星导航系统介绍</div>
	                </div>

	                <div class="item">
	                    <a><img src="../assets/imgs/W020180428427723316658.png" alt=""></a>
	                    <div class="carousel-caption">星历星座</div>
	                </div>

	                <div class="item">
	                    <a><img src="../assets/imgs/W020180502373371243694.png" alt=""></a>
	                    <div class="carousel-caption">监测评估</div>
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

export default {
  	data () {
    	return {

    	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
