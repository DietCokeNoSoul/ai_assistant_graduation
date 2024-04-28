<template>
    <!-- 选择区域 -->
    <view class="class-container">
        <!-- 一级选择列表 -->
        <view class="swiper-container">
            <swiper class="swiper" :style="{ height: '44px' }" :scroll-with-animation="true" direction="horizontal">
                <swiper-item class="swiper-item">
                    <view class="tag-container">
                        <uni-data-checkbox class="test" mode="tag" :multiple="false" selectedColor="#393939" v-model="value" :localdata="range" @change="changeTag"></uni-data-checkbox>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <!-- 二级选择列表 -->
        <view class="class-list-lv2">
            <view class="class-list-lv2-item" v-for="(item,index) of rangeLv2" @click="gotoGenerate(item)">
                <image :src="item.img" style="width: 120rpx;height: 120rpx;border-radius: 20rpx;"></image>
                <text class="txt-class-list-lv2-item">{{ item.text }}</text>
            </view>
        </view>
    </view>
</template>
 
<script>
import { checkLogin } from '../../util/checkLogin.js'
    export default{
        data(){
            return{
                //一级选择的内容
                classItem:'营销类',
                //一级选择表
                value:0,
                range: [
                    {"value": 0,"text": "推广文案"},
                    {"value": 1,"text": "软广视频脚本"},
                    {"value": 2,"text": "商业策划"},
                    {"value": 3,"text": "电商营销"},
                    {"value": 4,"text": "其他"}],
                //二级选择表
                rangeLv2:[],
                //营销类
                marketingList:[
                    {"value": 0,"text": "小红书推广文案","img":"../../static/icon/xiaohongshu.png"},
                    {"value": 1,"text": "抖音推广文案","img":"../../static/icon/douyin.jpg"},
                    {"value": 2,"text": "微博推广文案","img":"../../static/icon/weibo.png"},
                    {"value": 3,"text": "微信推广文案","img":"../../static/icon/weixin.jpg"},
                    {"value": 4,"text": "知乎回答","img":"../../static/icon/zhihu.webp"},
                    {"value": 5,"text": "品牌故事生成","img":"../../static/icon/iconfont-icon.png"},
                    {"value": 6,"text": "活动策划","img":"../../static/icon/iconfont_bi.png"}],
                //视频类
                videoList:[
                    {"value": 0,"text": "口播类视频创意","img":"../../static/icon/douyin.jpg"},
                    {"value": 1,"text": "vlog类视频脚本","img":"../../static/icon/douyin.jpg"},
                    {"value": 2,"text": "剧情类视频脚本","img":"../../static/icon/douyin.jpg"},
                    {"value": 3,"text": "探店类视频脚本","img":"../../static/icon/douyin.jpg"},
                    {"value": 4,"text": "带货类视频脚本","img":"../../static/icon/douyin.jpg"}],
                //商业类
                businessList:[
                    {"value": 0,"text": "商业计划书","img":"../../static/icon/iconfont-icon.png"},
                    {"value": 1,"text": "商业演讲","img":"../../static/icon/iconfont_bi.png"},
                    {"value": 2,"text": "领导发言稿","img":"../../static/icon/iconfont-me.png"},
                    {"value": 3,"text": "新闻通稿","img":"../../static/icon/bob.png"},
                    {"value": 4,"text": "品牌策划","img":"../../static/icon/iconfont-icon-cehua.png"}],
                //电商类
                eBusinessList:[
                    {"value": 0,"text": "商品描述","img":"../../static/icon/shangpin.png"},
                    {"value": 1,"text": "好评批量生成","img":"../../static/icon/haopin.png"},
                    {"value": 2,"text": "专业回复评论","img":"../../static/icon/huifu.png"},
                    {"value": 3,"text": "店铺介绍","img":"../../static/icon/dianshang.png"}],
                //工具类
                ToolList:[
                    {"value": 0,"text": "自由生成","img":"../../static/icon/liaotian.png"},]
            }
        },
        onLoad() {
            uni.showLoading({
                title: '加载中',
                mask: true
            })
            this.rangeLv2=this.marketingList
            uni.hideLoading()
            // 检查登陆状态
            if(!checkLogin()){
                uni.showModal({
                    title: '未登录,请登录后再使用',
                    content: '',
                    showCancel: true,
                    success: ({ confirm, cancel }) => {
                        if(confirm){
                            uni.switchTab({
                                url: '/pages/my/my'
                            })
                        }
                    }
                })
            }
        },
        methods:{
            //一级选择改变 
            changeTag(e){
                switch(e.detail.value){
                    case 0:{
                        this.rangeLv2=this.marketingList
                        this.classItem='营销类'
                        break
                    }
                    case 1:{
                        this.rangeLv2=this.videoList
                        this.classItem='视频类'
                        break
                    }
                    case 2:{
                        this.rangeLv2=this.businessList
                        this.classItem='商业类'
                        break
                    }
                    case 3:{
                        this.rangeLv2=this.eBusinessList
                        this.classItem='电商类'
                        break
                    }
                    case 4:{
                        this.rangeLv2=this.ToolList
                        this.classItem='工具类'
                        break
                    }
                    default:{
                        this.rangeLv2=[]
                    }
                }
            },
            //跳转到生成页面
            gotoGenerate(item){
            // 检查登陆状态
            if(!checkLogin()){
                uni.showModal({
                    title: '未登录,请登录后再使用',
                    content: '',
                    showCancel: true,
                    success: ({ confirm, cancel }) => {
                        if(confirm){
                            uni.switchTab({
                                url: '/pages/my/my'
                            })
                        }   
                    }
                })
            }
            else{
                switch(this.classItem){
                    case '营销类':{
                        uni.navigateTo({
                            url: '/subpkg/generate/generate_marketing?name='+item.text
                        })
                        break
                    }
                    case '视频类':{
                        uni.navigateTo({
                            url: '/subpkg/generate/generate_video?name='+item.text
                        })
                        break
                    }
                    case '商业类':{
                        uni.navigateTo({
                            url: '/subpkg/generate/generate_business?name='+item.text
                        })
                        break
                    }
                    case '电商类':{
                        uni.navigateTo({
                            url: '/subpkg/generate/generate_eBusiness?name='+item.text
                        })
                        break
                    }
                    case '工具类':{
                        uni.navigateTo({
                            url: '/subpkg/generate/generate_tool?name='+item.text
                        })
                        break
                    }
                }
                }
            }
        }
    }
</script>

<style lang="scss">
page{
    background-color: #393939;
}
.test{
    .uni-data-checklist{
        .checklist-group {
            flex-wrap: nowrap;
            .checklist-box{
                margin-bottom: 0;
                .radio__inner{
                    background-color: #838383;
                }
                .checklist-content{
                    .checklist-text{
                        margin-left:7px

                    }

                }
            }
        }
    }
}
.class-container{
    margin-top: 0;
    background-color: #393939;
    margin: 0 20rpx;
    .swiper-container {
        width: 100%;
        overflow: hidden;
        margin-bottom: 0;
        .swiper {
            width: 100%;
            .swiper-item {
                display: flex;
                .tag-container {
                    display: flex;
                    flex-wrap: nowrap; /* 不换行 */
                    overflow-x: auto; /* 允许水平滚动 */
                    .uni-data-checkbox {
                        white-space: nowrap; /* 防止标签换行 */
                        margin-right: 10px; /* 设置标签之间的间距，根据需要调整 */
                    }
                }
            }
        }
    }
    .class-list-lv2{
        margin: 10px 10px;
        height: 1000rpx;
        overflow-y: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 将容器分为两列 */
        grid-gap: 10px; /* 可根据需要调整 */
        background-color: #393939;
        .class-list-lv2-item{
            box-shadow: 5px 5px 10px 0px rgba(20, 20, 20, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 5px 5px;
            height:250rpx;
            border: 2px solid #838383;
            border-radius: 5px;
            .txt-class-list-lv2-item{
                //手动居中
                color:white;
                margin-top: 15rpx;
            }
        }
    }
}
</style>