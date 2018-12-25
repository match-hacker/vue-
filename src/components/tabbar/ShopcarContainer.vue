<template>
  <div class="shopcar-container">
    <div class="goods-list">
 
      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[2]" @change="selectedChanged(2, $store.getters.getGoodsSelected[2])"></mt-switch>
            <img src="../../images/hw.jpg" alt>
            <div class="info">
              <h1>华为 Mate20 RS保时捷设计</h1>
              <p>
                <span class="price">￥2199</span>
                <numbox :initCount='$store.getters.getGoodsCount[2]' :goodsid="2"></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[1]" @change="selectedChanged(1, $store.getters.getGoodsSelected[1])"></mt-switch>
            <img src="../../images/hs2.jpg" alt>
            <div class="info">
              <h1>黑鲨 2代 游戏手机 Helo 生为竞技 极夜黑 10+256G（原装左右双手柄+碎屏保）</h1>
              <p>
                <span class="price">￥29199</span>
                <numbox :initCount='$store.getters.getGoodsCount[1]' :goodsid="1"></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- =======模板======= -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsCount[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initCount='$store.getters.getGoodsCount[item.id]' :goodsid="item.id"></numbox>
                <a href="#" @click.prevent='remove(item.id,i)'>删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ---结算---- -->
  <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
           <div class="left">
             <p>总计（不含运费）</p>
             <p>已购选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 
             件， 总价 <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
           </div>
                     <mt-button type='danger'>去结算</mt-button>
          </div>
        </div>
      </div>

      <!-- ------------ -->
    </div>

  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
export default {
    data() {
          return {
              goodslist: [{id:3, title: '华为荣耀', goods_no: 'SD24353444', stock_quantity: 20, market_price: 666, sell_price: 2000}]
          }
      },
      created(){
        this.getGoodsList();
      },
      methods: {
          getGoodsList(){
            var idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id))
            if (idArr.length <=0) {
              return;
            }
              this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result =>{
                if (result.body.status === 0) {
                  this.goodslist = result.body.message;
                }
              })
          
          },
          remove(id,index) {
              this.goodslist.splice(index, 1);
              this.$store.commit('removeFormCar', id);
          },
          selectedChanged(id, val){
            // console.log(id+'dddd'+val)
            this.$store.commit('updateGoodsSelected', {id, selected: val})
          }
      },
  components: {
        numbox
  }
};
</script>

<style scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
}
.shopcar-container img{
    width: 60px;
    height: 60px;
}

.shopcar-container h1 {
    font-size: 14px;
}
.shopcar-container .info .price{
    color: red; font-weight: bold
}
.shopcar-container .mui-card-content-inner {
    display: flex;
    align-items: center;
}
.shopcar-container .info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.jiesuan{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.jiesuan .red{
  color: red;
  font-weight: bold;
  font-size: 16px;
}

</style>













