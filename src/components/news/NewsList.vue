<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id" class="">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间:{{ tiem.add_time | dateFormat }} </span><span> 点击:{{item.click}}次</span>
                                <!-- <span>发表时间:{{ tiem.add_time | dateFormat('YYYY-MM-DD') }} </span><span> 点击:{{item.click}}次</span> -->
                                </p>
						</div>
					</router-link>
				</li>

				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/1'" class="">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545440247&di=5cb392753091e2d77e2ff67858e41a64&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3e33344d6d150f61440285ac0aa195d6f62b82b1186c9-gVMsyp_fw658">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1905483430,4207413095&fm=26&gp=0.jpgg">
						<div class="mui-media-body">
			<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544845568182&di=117416db9845d439f366275a8f2cae7f&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fthumb300%2F8729a648jw1etgqrgjprvj20dc0hsdi1.jpg">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545440247&di=5cb392753091e2d77e2ff67858e41a64&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3e33344d6d150f61440285ac0aa195d6f62b82b1186c9-gVMsyp_fw658">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>

		
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545440247&di=5cb392753091e2d77e2ff67858e41a64&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3e33344d6d150f61440285ac0aa195d6f62b82b1186c9-gVMsyp_fw658">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1905483430,4207413095&fm=26&gp=0.jpgg">
						<div class="mui-media-body">
			<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544845568182&di=117416db9845d439f366275a8f2cae7f&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fthumb300%2F8729a648jw1etgqrgjprvj20dc0hsdi1.jpg">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545440247&di=5cb392753091e2d77e2ff67858e41a64&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3e33344d6d150f61440285ac0aa195d6f62b82b1186c9-gVMsyp_fw658">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>

		
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545440247&di=5cb392753091e2d77e2ff67858e41a64&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3e33344d6d150f61440285ac0aa195d6f62b82b1186c9-gVMsyp_fw658">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1905483430,4207413095&fm=26&gp=0.jpgg">
						<div class="mui-media-body">
			<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544845568182&di=117416db9845d439f366275a8f2cae7f&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fthumb300%2F8729a648jw1etgqrgjprvj20dc0hsdi1.jpg">
						<div class="mui-media-body">
				<h1>幸福</h1>
							<!-- <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
                            <p class="mui-ellipsis">
                                <span>发表时间: 2012-12-12 12:12:12 </span><span> 点击:0次</span>
                                </p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
     export default {
         data(){
             return{
                 newslist: []
             };

         },
         created(){
             this.getNewsList();
         },
         methods:{
             getNewsList() {
                //  this.$http.get('api/getnewslist').then(result => {
                 this.$http.get('').then(result => {
                     if (result.body.status === 0) {
                         this.newslist = result.body.message;
                     }
                     else {
                         Toast('获取新闻列表失败')
                     }
                 })
             }
         }
     }
</script>

   <style scoped>
        li h1 {
            font-size: 14px;
        }
        li .mui-ellipsis {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
</style>




