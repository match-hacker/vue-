<template>
    <div>
          <mt-swipe :auto="4000">
        <!-- <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item> -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
         <img :src="item.img" alt="" :class='{"full": isfull}'>
        </mt-swipe-item> 
     
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ['lunbotuList', 'isfull']
}
</script>


<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  text-align: center;
}
/* .mint-swipe-item:nth-child(1) {
  background-color: rgb(236, 162, 162);
  交集选择器
}
.mint-swipe-item:nth-child(2) {
  background-color: rgb(160, 160, 240);
}
.mint-swipe-item:nth-child(3) {
  background-color: rgb(190, 231, 190);
} */
.mint-swipe img {
  height: 100%;
  /* width: 100%; */
}
.full {
  width: 100%;
}
</style>




