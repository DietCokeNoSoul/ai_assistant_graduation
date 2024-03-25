<template>
    <!-- 页面容器 -->
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <text class="generate-item-title">品牌名称</text>
            <uni-easyinput v-model= "name_value" type="text" maxlength="30" @input="inputName" placeholder="例:苹果">{{  name_value }}</uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{    name_value.length }}/30</view>
            <text class="generate-item-title">营销主体</text>
            <uni-easyinput v-model= "object_value" type="text" maxlength="30" @input="inputObject" placeholder="例:iphone16">{{  object_value }}</uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{    object_value.length }}/30</view>
            <text class="generate-item-title">主题</text>
            <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain">{{  main_value }}</uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{    main_value.length }}/30</view>
            <view class="choose-box">
                <text class="generate-item-title">文案类型</text>
                <uni-data-select v-model="class_value" :localdata="class_range" :clear="false" @change="changeClass"></uni-data-select>
            </view>
            <view class="choose-box">
                <text class="generate-item-title">文案语气</text>
                <uni-data-select v-model="tone_value" :localdata="tone_range" :clear="false" @change="changeTone"></uni-data-select>
            </view>
            <text class="generate-item-title">目标人群</text>
            <uni-easyinput v-model= "people_value" type="text" maxlength="16" @input="inputPeople">{{  people_value }}</uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{    people_value.length }}/16</view>
        </view>
        <button class="submit-btn">生成</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                //品牌名称
                name_value:'',
                //营销主体
                object_value:'',
                //主题
                main_value:'',
                //目标人群
                people_value:'',
                //文案类型
                class_value:0,
                class_range:[{
                    "value": 0,
                    "text": "种草文案"
                },{
                    "value": 1,
                    "text": "评测文案"
                },{
                    "value": 2,
                    "text": "教程文案"}],
                //文案语气
                tone_value:0,
                tone_range:[{
                    "value": 0,
                    "text": "活泼"
                },{
                    "value": 1,
                    "text": "文艺"
                },{
                    "value": 2,
                    "text": "幽默"
                },{
                    "value": 3,
                    "text": "专业"}]
            }
        },
        methods:{
            //输入品牌名称
            inputName(e){
                
            },
            //输入营销主体
            inputObject(e){
                
            },
            //输入主题
            inputMain(e){
                
            },
            //输入目标人群
            inputPeople(e){
                
            },
            //选择文案类型
            changeClass(e){
                
            },
            //选择文案语气
            changeTone(e){
                
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
        }
        .choose-box{
            margin-bottom: 40px;
        }
    }
    .submit-btn{
        margin-top: 40px;
        background-color: black;
        color: white;
        font-size: 30rpx;
        width: 40%;
        border-radius: 20px;
    }
}
</style>