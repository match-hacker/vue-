
<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll" style="transform: translate3d(10px, 10px, 10px) translateZ(10px);">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            data-wid="tab-top-subpage-6.html" @tap="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
                <!-- tap只能mui组件使用，因为@click在手机上会有bug不能切换 -->
        </div>
      </div>
    </div>

    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
			<h1 class="info-title">{{item.title}}</h1>
			<div class="info-body">{{item.zhaiyao}}</div>
		</div>
      </router-link>
		
    </ul>
	<router-link :to="'/home/photoinfo/1'" tag="li">
	<img width="400px" height="400px"  src="../../images/qq.jpg">
	</router-link>
	<img width="400px" height="400px"  src="../../images/ww.jpg">
	<img width="400px" height="400px"  src="../../images/ee.jpg">
	<img width="400px" height="400px"  src="../../images/aa.jpg">
	<img width="400px" height="400px"  src="../../images/cc.jpg">
	<img width="400px" height="400px"  src="../../images/dd.jpg">
	<img width="400px" height="400px"  src="../../images/hg.jpg">
  </div>
</template>

<script>
// 在bundle.js中默认开启严格模式，mui.js中用到了caller，callee，arguments，我们使用npm install babel-plugin-transform-remove-strict-mode -D移除严格模式
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
	  cates: [],
	//   图片列表数组
	  list:[],
    };
  },
  created() {
	this.getAllCategory();
	this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
    //   this.$http.get("api/getimgcategory").then(result => {
      this.$http.get("").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
	},
	getPhotoListByCateId(cateId) {
		// this.$http.get('api/getimages/' + cateId).then(result =>{
		this.$http.get('').then(result =>{
			if (result.body.status === 0) {
				this.list = result.body.message;
			}
		})
	}
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}


.photo-list {
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
}

.photo-list li {
	background-color: #ccc;
	text-align: center;
	margin-bottom: 10px;
	box-shadow: 0 0 9px #999;
	position: relative;
	
}

.photo-list li img {
	width: 100%;
	vertical-align: middle
}
.photo-list li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}


.photo-list li .info {
	text-align: left;
		color: white;
		position:absolute;
		bottom: 0;
		background-color:rgba(0,0,0,0.4);
		max-height: 84px;
}

.photo-list li .info .info-title {
	font-size:  14px;

}
.photo-list li .info .info-body {
	font-size:  13px;

}

</style>




