


<template>
  <div class="goodsdes-container">
    <h3>{{ info.title}}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      info: {title: 'HUAWEI 新款华为Mate 20 RS手机保时捷设计限量版全面屏超大广角徕卡三镜头8G+512G 瑞红色 8G+512G', content:'<div class="lemma-summary" label-module="lemmaSummary"><div class="para" label-module="para">华为手机<sup class="sup--normal" data-sup="1">[1]</sup><a>&nbspdddddddddddddddddddddd;</a>'}
    };
  },
  created()
{   
    //  this.getGoodsDesc();
},
  methods: {
      getGoodsDesc(){
          this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(result =>{
              if (result.body.status === 0) {
                  this.info = result.body.message[0]
              }
          })
      }
  }
};
</script>



<style >
.goodsdes-container h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
}
.goodsdes-container{
    padding: 4px;
}
</style>



