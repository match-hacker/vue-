import Vue from 'vue'
import app from './app.vue'
import router from './router.js'
// 用懒加载不能按需导入，无法导入小图标，只能全部导入
// import {Header, Swipe, SwipeItem, Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addToCar(state, goodsinfo) {
            var flag = false;
            // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

            // some() 方法会依次执行数组的每个元素：

            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。

            // 注意： some() 不会改变原始数组。
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true;
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            console.log(goodsinfo)
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) { state.car.splice(i, 1) }
                return true
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item =>{
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            // var o = {}
            var o = { 1: 3, 2: 4 }
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state){
            var oo  = {}
            state.car.forEach(item =>{
                oo[item.id] = item.selected
            })
            return oo 
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item =>{
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.http.options.root = '';
Vue.http.options.emulateJSON = true;
// 设置全局请求地址
// Vue.http.options.root = 'http://vue.studyit.io';
// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})










