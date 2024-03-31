<template>
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">预测营业额</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "turnover_value" type="text" maxlength="16" @input="inputTurnover" placeholder="例:每年2000万">{{  turnover_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ turnover_value.length }}/16</view>
            </view>
            <!-- 选择区域-->
            <view class="choose-box" v-if="name==='商业演讲'||name==='领导发言稿'">
                <text class="choose-item-title">文章风格</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="style_value" :localdata="style_range" :clear="false" @change="changeStyle"></uni-data-select>
                </view>
            </view>             
        </view>
        <button class="submit-btn" @click="gotoDetail">生成</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            //跳转到生成详情页
            gotoDetail(){
                uni.navigateTo({
                    url:'/subpkg/generate/generate_detail'
                })
            }
        },
        props:{
            name:{
                type:String,
                default:''
            }
        }
    }
</script>

<style lang="scss" scoped>
.generate-container{
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    .generate-title{
        margin-bottom: 20px;
        font-size: 50rpx;
        font-weight: bold;
    }
    .generate-box{
        display: flex;
        flex-direction: column;
        .generate-item-title{
            font-size: 35rpx;
            color:#6d6d6d;
            margin-bottom: 10px;
            margin-top: 10px;
            &::before{
                content: '*';
                color:red;
            }
        }
        .choose-box{
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            .choose-item-title{
                font-size: 35rpx;
                color:#6d6d6d;
                margin-bottom: 10px;
                &::before{
                    content: '*';
                    color:red;
                }
            }
        }
    }
    .submit-btn{
        margin-top: 60px;
        background-color: black;
        color: white;
        font-size: 30rpx;
        width: 40%;
        border-radius: 20px;
    }
}
</style>