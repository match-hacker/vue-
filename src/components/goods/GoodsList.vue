<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" 
    :to="'/home/goodsinfo/' + item.id" tag="div">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title }}）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>-->
    <div
      class="goods-item"
      v-for="item in goodslist"
      :key="item.id"
      :to="'/home/goodsinfo/' + item.id"
      @click="goDetail(item.id)"
    >
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title }}）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <router-link class="goods-item" to="/home/goodsinfo/1" tag="div">
      <img src="../../images/11.jpg" alt>
      <h1 class="title">小米（Mi）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余33件</span>
        </p>
      </div>
    </router-link>
    <!-- 两种跳转方式
  1，使用a标签
    2，使用window.location.href，编程式导航，就是js跳转-->
    <div class="goods-item" @click="goDetail(2)">
      <img src="../../images/hs2.jpg" alt>
      <h1 class="title">游戏手机 8GB+128GB 极夜黑 液冷更快 全网通4G 双卡双待</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余33件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../images/11.jpg" alt>
      <h1 class="title">小米（Mi）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余33件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      // this.$route是路由参数对象，所有路由参数params，query都是它，
      // this.$router是路由导航对象，用js实现前进后退
      // https://router.vuejs.org/zh/guide/essentials/navigation.html
      // this.$router.push("/home/goodsinfo/" + id);
      this.$router.push({name:'goodsinfo', params: {id}});
    }
  }
};
</script>




<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}

.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-list .goods-item img {
  width: 100%;
}
.goods-list .goods-item .title {
  font-size: 14px;
}
.goods-list .goods-item .info {
  background-color: #eee;
}
.goods-list .goods-item .info p {
  margin: 0;
  padding: 5px;
}
.goods-list .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-list .goods-item .info .price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.goods-list .goods-item .info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.goods-list .goods-item {
}
</style>



