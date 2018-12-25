<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea
      v-model="msg"
      placeholder="请输入要BB的内容（最多吐槽120字）"
      maxlength="120"
      id
      cols="30"
      rows="10"
    ></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp; 用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content === 'undefined' ? '此用户很懒，什么也没说': item.content}}}</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp; 用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，和嗲家地史蒂夫的</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp; 用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，和嗲家地史蒂夫的</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp; 用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</div>
        <div class="cmt-body">锄禾日当午，和嗲家地史蒂夫的</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      //   this.$http.get('api/getcomments/'+ this.id + '?pageindex=' + this.pageIndex).then(result => {
      this.$http.get("").then(result => {
        if (result.body.status === 0) {
          //   this.comments = result.body.message; 不能把就数据覆盖，而是拼接
          this.comments = this.comments.concat(result.body.message);
        } else {
          Toast("获取评论失败");
        }
      });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "",
              add_time: Date.now(),
              content: this.msg.trim()
            };
          }else {
              Toast("评论失败");
          };
          this.comments.unshift(cmt);
          this.msg = "";
        });
    }
  },
  props: ["id"]
};
</script>





<style scoped>
.cmt-container h3 {
  font-size: 18px;
}

.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-list .cmt-item {
  font-size: 13px;
}
.cmt-container .cmt-list .cmt-item .cmt-title {
  background-color: #ccc;
}
.cmt-container .cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 2em;
  /* 缩进 */
}
</style>












