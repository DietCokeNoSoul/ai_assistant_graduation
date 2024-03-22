<template>
    <view>
        <!-- 总标题 -->
        <text class="home-title">AI小助手</text>
        <!-- 选择区域 -->
        <view class="class-container">
            <!-- 选择标题 -->
            <text class="class-title" v-if="classItem==='角色聊'">一个随意倾诉的地方</text>
            <text class="class-title" v-else>请选择要生成的类型</text>
            <!-- 一级选择列表 -->
            <view class="class-list">
                <uni-data-checkbox mode="tag" :multiple="false" selectedColor="#000000" v-model="value" :localdata="range" @change="changeTag"></uni-data-checkbox>
            </view>
            <!-- 二级选择列表 -->
            <view class="class-list-lv2">
                <view class="class-list-lv2-item" v-for="(item,index) of rangeLv2">
                    <text class="txt-class-list-lv2-item">{{ item.text }}</text>
                    <button class="btn-class-list-lv2-item" @click="gotoGenerate(item)">生成</button>
                </view>
            </view>
    </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                //一级选择的内容
                classItem:'',
                //一级选择表
                value:0,
                range: [
                    {"value": 0,"text": "营销"},
                    {"value": 1,"text": "视频"},
                    {"value": 2,"text": "商业"},
                    {"value": 3,"text": "电商"},
                    {"value": 4,"text": "聊天"}],
                //二级选择表
                rangeLv2:[],
                //营销类
                marketingList:[
                    {"value": 0,"text": "小红书推广文案"},
                    {"value": 1,"text": "抖音推广文案"},
                    {"value": 2,"text": "微博推广文案"},
                    {"value": 3,"text": "微信推广文案"},
                    {"value": 4,"text": "知乎文章"},
                    {"value": 5,"text": "品牌故事生成"},
                    {"value": 6,"text": "线下活动策划"}],
                //视频类
                videoList:[
                    {"value": 0,"text": "口播类视频创意"},
                    {"value": 1,"text": "vlog类视频脚本"},
                    {"value": 2,"text": "剧情类视频脚本"},
                    {"value": 3,"text": "探店类视频脚本"},
                    {"value": 4,"text": "带货类视频脚本"}],
                //商业类
                businessList:[
                    {"value": 0,"text": "商业计划书"},
                    {"value": 1,"text": "商业演讲"},
                    {"value": 2,"text": "领导发言稿"},
                    {"value": 3,"text": "新闻通稿"},
                    {"value": 4,"text": "品牌策划"}],
                //电商类
                eBusinessList:[
                    {"value": 0,"text": "商品描述"},
                    {"value": 1,"text": "好评批量生成"},
                    {"value": 2,"text": "专业回复评论"},
                    {"value": 3,"text": "店铺介绍"}],
                //角色聊
                chatList:[{
                    "value": 0,"text": "情感倾诉"},
                    {"value": 1,"text": "心理咨询"},
                    {"value": 2,"text": "情感分析"},
                    {"value": 3,"text": "情感疏导"},
                    {"value": 4,"text": "情感陪聊"
                }]
            }
        },
        onLoad() {
            uni.showLoading({
                title: '加载中',
                mask: true
            })
            this.rangeLv2=this.marketingList
            uni.hideLoading()
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
                        this.rangeLv2=this.chatList
                        this.classItem='角色聊'
                        break
                    }
                    default:{
                        this.rangeLv2=[]
                    }
                }
            },
            //跳转到生成页面
            gotoGenerate(item){
                uni.navigateTo({
                     url: '/subpkg/generate/generate?name='+item.text 
                })
            }
        }
    }
</script>

<style lang="scss">
.home-title{
    font-size: 50rpx;
    font-weight: bold;
}
.class-container{
    margin: 100rpx 20rpx;
    .class-title{
        font-size: 50rpx;
        font-weight: bold;
        font-family:cursive;
    }
    .class-list{
        margin-top: 30rpx;
        margin-bottom: 30rpx;
        display: flex;
        justify-content: center;
    }
    .class-list-lv2{
        .class-list-lv2-item{
            .txt-class-list-lv2-item{
                //手动居中
                margin-top: 9px;
            }
            .btn-class-list-lv2-item{
                font-size: 14px;
                background-color:black;
                color: white;
                padding: 4px 10px;
                //靠右
                margin-right: 0;
            }
            padding: 4px 10px;
            margin-bottom: 8px;
            border: 4px solid #000000;
            display: flex;
        }
    }
}
</style>