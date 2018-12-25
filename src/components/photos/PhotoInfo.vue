<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图区区 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论区区 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [],
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    handleClose(){},
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style scoped>
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photoinfo-container .subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.photoinfo-container .content {
  font-size: 13px;
  line-height: 30px;
}
.photoinfo-container .thumbs img {
  margin: 10px;
  box-shadow: 0 0 8px #999;
}
</style>



