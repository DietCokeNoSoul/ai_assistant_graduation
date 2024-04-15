<template>
    <view class="generate-container">
        <view class="title-box">
            <!-- 大标题 -->
            <text class="generate-title">{{ name }}</text>
            <view class="home-btn">
                <image class="home-img" src="/static/tb/home-a.png" mode="widthFix" @click="gotoHome"></image>
            </view>
        </view>
        <!-- 文本生成区域 -->
        <view class="generate-box">
            <text class="generate-text">???:{{ chatContent }}</text>
        </view>
        <!-- 生成按钮 -->
        <view class="generate-btn-box">
            <button class="generate-btn"  @click="generate">
                <uni-icons type="refreshempty" size="20"></uni-icons>
                <view class="btn-text-box">
                    <text :style="{'color':'balck','font-size':'30rpx','line-height':'30rpx','margin-top':'15rpx'}">重新生成</text>
                    <text :style="{'color':'#797979','font-size':'20rpx','margin-top':'0px'}">结果不满意时点击我</text>
                </view>
            </button>
            <button class="generate-btn"  @click="generate">
                <uni-icons type="redo-filled" size="20"></uni-icons>
                <view class="btn-text-box">
                    <text :style="{'color':'balck','font-size':'30rpx','line-height':'30rpx','margin-top':'15rpx'}">继续生成</text>
                    <text :style="{'color':'#797979','font-size':'20rpx','margin-top':'0px'}">生成中断时点击我</text>
                </view>
            </button>
        </view>
        <!-- 需求输入区域 -->
        <view class="input-box">
            <textarea type="text" :value="input_value" maxlength="-1" @confirm="confirm" :auto-height="true" show-confirm-bar="true" placeholder="请描述您的需求" />
        </view>
    </view>
</template>

<script>
import { chat } from '../../util/GPTapi.js'
export default{
    data(){
        return{
            //需求输入
            input_value: '',
            //GPT返回的内容
            chatContent:'',
        }
    },
    onLoad() {
        this.getGpt();
    },
    methods:{
        //输入需求
        confirm(){
            console.log(this.input_value)
        },
        //返回首页
        gotoHome(){
            uni.switchTab({ url: '/pages/home/home' })
        },
        //生成
        generate(){
            console.log('生成')
        },
        //获取GPT
        getGpt() {
            chat(this.preContent).then((res) => {
            this.startTypingAnimation(res); // 获取到返回值后，开始打字动画
            }).catch((error) => {
            console.error('chat 请求失败', error);
            });
        },
        //打字动画
        startTypingAnimation(text) {
            const typingSpeed = 20; // 打字速度，单位为毫秒
            let index = 0;
            const timer = setInterval(() => {
            const typedText = text.slice(0, index + 1); // 逐步截取聊天内容
            this.chatContent = typedText; // 更新聊天内容
            index++;
            if (index === text.length) {
                clearInterval(timer); // 打字结束，清除定时器
            }
            }, typingSpeed);
        },
    },
    props: {
        name: {
            type: String,
            default: 'generate_detail'
        },
        preContent: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.generate-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #efefef;
    .title-box{
        display: flex;
        justify-content: space-between;
        .generate-title{
            margin-top: 10px;
            margin-left: 20px;
            margin-bottom: 20px;
            font-size: 50rpx;
            font-weight: bold;
        }
        .home-btn{
            border: 1px solid #b5b5b5;
            height: 35px;
            width: 35px;
            border-radius: 15px;
            margin-top: 10px;
            margin-right: 10px;
            background-color: white;
            overflow: hidden;
            .home-img {
                width: 100%; /* 图片宽度与容器宽度一致 */
                height: 100%; /* 图片高度与容器高度一致 */
                object-fit: cover; /* 裁剪并覆盖 */
            }
        }
    }
    .generate-box{
        background-color: #c9c9c9;
        .generate-text{
            white-space: pre-wrap;
        }
    }
    .generate-btn-box{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: auto;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        .generate-btn{
            border: none;
            height: 100rpx;
            width: 300rpx;
            background-color: white;
            box-shadow: 0 2px 4px 0 rgba(108, 108, 108, 0.2);
            display: flex;
            justify-content: space-between;
            .btn-text-box{
                display: flex;
                flex-direction: column;
            }
        }
    }
    .input-box{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        background-color: white;
        padding: 10px 10px;
        z-index: 999;
    }
}
</style>

