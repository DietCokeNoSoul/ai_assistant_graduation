<template>
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 商业计划书 -->
            <view>
                <text class="generate-item-title">给小助手打个招呼或者问个问题吧</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "preContent" type="text" maxlength="2000" placeholder="例:你好">{{  preContent }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ preContent.length }}/2000</view>
            </view>         
        </view>
        <button class="submit-btn" @click="gotoDetail">生成</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                // 聊天内容
                preContent:'',
            }
        },
        methods:{
            //跳转到生成详情页
            gotoDetail(){
                if(this.preContent == ''){
                    uni.showToast({
                        title: '请填写内容',
                        icon: 'none'
                    })
                    return
                }
                uni.navigateTo({
                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
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