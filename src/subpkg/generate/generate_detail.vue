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
        <scroll-view class="generate_box" :style="{height:scrollViewHeight+'px'}" :scroll-y="true" :scroll-top="scrollTop" :scroll-with-animation="true">
            <view id="scroll-view-content">
                <view :class="{ 'history-res-box': index % 2 === 0, 'history-text-box': index % 2 !== 0 }" v-for="(item,index) of chatArray" :key="index">
                    <text user-select="true">{{ item }}</text>
                </view>
            </view>
        </scroll-view>
        <!-- 生成按钮 -->
        <view class="generate-btn-box">
            <button class="generate-btn"  @click="re_generate">
                <uni-icons type="refreshempty" size="20"></uni-icons>
                <view class="btn-text-box">
                    <text :style="{'color':'balck','font-size':'30rpx','line-height':'30rpx','margin-top':'15rpx'}">重新生成</text>
                    <text :style="{'color':'#797979','font-size':'20rpx','margin-top':'0px'}">结果不满意时点击我</text>
                </view>
            </button>
            <button class="generate-btn"  @click="con_generate">
                <uni-icons type="redo-filled" size="20"></uni-icons>
                <view class="btn-text-box">
                    <text :style="{'color':'balck','font-size':'30rpx','line-height':'30rpx','margin-top':'15rpx'}">继续生成</text>
                    <text :style="{'color':'#797979','font-size':'20rpx','margin-top':'0px'}">继续提问点击我</text>
                </view>
            </button>
        </view>
        <!-- 需求输入区域 -->
        <view class="input-box">
            <textarea type="text" v-model="input_value" maxlength="-1" @confirm="confirm" :auto-height="true" show-confirm-bar="true" placeholder="请描述您的需求" />
        </view>
    </view>
</template>

<script>
import { chat } from '../../util/api.js'
export default{
    data(){
        return{
            scrollTop:0,//滚动条位置
            scrollViewHeight:300,//滚动视图的高度
            //需求输入
            input_value: '',
            //当前GPT返回的内容
            chatContent:'',
            //聊天历史
            chatArray:[],
            //输入message
            message:[
                {"role": 'system', "content": 'You are a helpful assistant.'}, 
                {"role": 'user', "content": this.preContent},
            ]
        }
    },
    onLoad() {
        this.getGpt();
    },
    methods:{
        //滚动到底部
        scrollToBottom(){
            this.$nextTick(()=>{
                uni.createSelectorQuery().in(this).select('#scroll-view-content').boundingClientRect((res)=>{
                    let top = res.height-this.scrollViewHeight;
                    if(top>0){
                        this.scrollTop=top;
                    }
                }).exec()
            })
        },
        //输入需求
        confirm(){
            if(this.input_value==''){
                uni.showToast({
                    title: '请输入内容',
                    icon: 'none'
                });
                return;
            }
            else{
                this.chatArray.push(this.input_value);
                this.message.push({"role": "user", "content": this.input_value});//保存对话
                this.getGpt();
                this.input_value='';//清空输入框
                this.scrollToBottom();
            }
        },
        //返回首页
        gotoHome(){
            uni.switchTab({ url: '/pages/home/home' })
        },
        //重新生成
        re_generate(){
            this.chatArray.pop();//删除最后一个元素
            this.message.push({"role": "user", "content": '能重新提供解答吗?'});//保存对话
            this.getGpt();
            this.input_value='';//清空输入框
        },
        //继续生成
        con_generate(){
            if(this.input_value==''){
                uni.showToast({
                    title: '请输入内容',
                    icon: 'none'
                });
                return;
            }
            else{
                this.chatArray.push(this.input_value);
                this.message.push({"role": "user", "content": this.input_value});//保存对话
                this.getGpt();
                this.input_value='';//清空输入框
                this.scrollToBottom();
            }
        },
        //获取GPT
        getGpt() {
            uni.showLoading({
                title: '加载中'
            });
            chat(this.message).then((res) => {
            this.chatArray.push('');
            this.startTypingAnimation(res); // 获取到返回值后，开始打字动画
            this.chatContent=res;
            this.message.push({"role": "assistant", "content": res});//保存对话
            uni.hideLoading()
            }).catch((error) => {
            console.error('chat 请求失败', error);
            uni.hideLoading()
            });
        },
        startTypingAnimation(text) {
            const typingSpeed = 20;
            let index = 0;
            let typedText = '';
            const timer = setInterval(() => {
                typedText = text.slice(0, index + 1);
                this.$set(this.chatArray, this.chatArray.length - 1, typedText);
                index++;
                this.scrollToBottom(); // 在文字打印完成后触发滚动函数
                if (index === text.length) {
                    clearInterval(timer);
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
    },
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
            margin-bottom: 10px;
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
    .generate_box{
        flex: 1; // 自动填充剩余空间
        overflow-y: auto; /* 垂直滚动条 */
        .history-res-box{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        margin-right: 20px;
        margin-top: 5px;
        border-radius: 3px;
        padding: 5px 5px;
        background-color: #d1d1d1;
            .generate-text{
                white-space: pre-wrap;
            }
        }
        .history-text-box{
            display: flex;
            flex-direction: column;
            margin-left: 40px;
            margin-right: 5px;
            margin-top: 5px;
            border-radius: 3px;
            padding: 5px 5px;   
            background-color: #ffffff;
                .generate-text{
                    white-space: pre-wrap;
                }
        }
    }
    .generate-btn-box{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
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

