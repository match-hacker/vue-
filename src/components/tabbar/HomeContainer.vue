<template>
  <div>
  <!-- 轮播图区域 -->
<swiper :lunbotuList='lunbotuList' :isfull='true'></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/photolist'>
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to='/home/goodslist'> <img src="../../images/menu3.png" alt>
        <div class="mui-media-body">商品购买</div></router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/photolist'><img src="../../images/menu4.png" alt>
        <div class="mui-media-body">留言反馈</div></router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/photolist'><img src="../../images/menu5.png" alt>
        <div class="mui-media-body">视频专区</div></router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to=''> <img src="../../images/menu6.png" alt>
        <div class="mui-media-body">联系我们</div></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      lunbotuList: [
        {img: '../../images/gy.jpg', url: 'pg'},
        {img: '../../images/bq.jpg', url: 'rSui.thumb.700_0.jpeg' },
        {img: '../../images/hs.jpg', url: 'rSui.0.jpeg' },
      ]
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // this.$http.get('api/getlunbo').then(result => {
      // if (result.body.status == 0) {
      //     this.lunbotuList = result.body.message;
      // } else {
      //     Toast('加载轮播图失败...');
      // }
      // });
    }
  },
  components: {
    swiper
  }
};
</script>

<style scoped>

/* .mint-swipe-item {
    &:nth-child(1) {
        background-color: red;
    }
    &:nth-child(2) {
        background-color: blue;
    }
    &:nth-child(3) {
        background-color: blue;
    }

} scss的语法 形成嵌套和交集选择器 */
/* img {
    width: 100%;
    height: 100%;
} */
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 img {
  width: 60px;
  height: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>













