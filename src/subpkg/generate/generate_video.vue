<template>
    <!-- 页面容器 -->
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 口播 vlog 剧情 探店 -->
            <view v-if="name==='口播类视频创意'||name==='vlog类视频脚本'||name==='剧情类视频脚本'||name==='探店类视频脚本'">
                <text class="generate-item-title">视频主题</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ main_value.length }}/30</view>
            </view>
            <!-- 口播  -->
            <view v-if="name==='口播类视频创意'">
                <text class="generate-item-title">内容场景</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "background_value" type="text" maxlength="16" @input="inputBackground" placeholder="例:生活">{{  background_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ background_value.length }}/16</view>
            </view>
            <!-- vlog -->
            <view v-if="name==='vlog类视频脚本'">
                <text class="generate-item-title">营销主体</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "marketing_value" type="text" maxlength="16" @input="inputMarketing" placeholder="例:连衣裙,没有则填'无'">{{  marketing_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ marketing_value.length }}/16</view>
            </view>
            <!-- 剧情类 -->
            <view v-if="name==='剧情类视频脚本'">
                <text class="generate-item-title">营销主体</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "marketing_value" type="text" maxlength="16" @input="inputMarketing" placeholder="例:连衣裙,没有则填'无'">{{  marketing_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ marketing_value.length }}/16</view>
            </view>
            <!-- 探店  -->
            <view v-if="name==='探店类视频脚本'">
                <text class="generate-item-title">店铺名称</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "brand_value" type="text" maxlength="16" @input="inputBrand" placeholder="例:蜜雪冰城">{{  brand_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ brand_value.length }}/16</view>
            </view>
            <!-- 探店  -->
            <view v-if="name==='探店类视频脚本'">
                <text class="generate-item-title">店铺类目</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "shop_value" type="text" maxlength="16" @input="inputShop" placeholder="例:奶茶店">{{  shop_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ shop_value.length }}/16</view>
            </view>
            <!-- 带货  -->
            <view v-if="name==='带货类视频脚本'">
                <text class="generate-item-title">产品</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "product_value" type="text" maxlength="16" @input="inputProduct" placeholder="例:骨传导耳机">{{  product_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ product_value.length }}/16</view>
            </view>
            <!-- 探店  -->
            <view v-if="name==='带货类视频脚本'">
                <text class="generate-item-title">品牌</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "brand_value" type="text" maxlength="16" @input="inputBrand" placeholder="例:竹林鸟">{{  brand_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ brand_value.length }}/16</view>
            </view>
            <!-- 选择区域(口播) -->
            <view class="choose-box" v-if="name==='口播类视频创意'">
                <text class="choose-item-title">内容氛围</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="atmosphere_value" :localdata="atmosphere_range" :clear="false" @change="changeAtmosphere"></uni-data-select>
                </view>
            </view>            
            <!-- 选择区域(vlog) -->
            <view class="choose-box" v-if="name==='vlog类视频脚本'">
                <text class="choose-item-title">内容类型</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="content_value" :localdata="content_range" :clear="false" @change="changeContent"></uni-data-select>
                </view>
            </view>    
            <view class="choose-box" v-if="name==='vlog类视频脚本'">
                <text class="choose-item-title">视频风格</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="style_value" :localdata="style_range" :clear="false" @change="changeStyle"></uni-data-select>
                </view>
            </view> 
            <!-- 选择区域(剧情) -->
            <view class="choose-box" v-if="name==='剧情类视频脚本'">
                <text class="choose-item-title">故事类型</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="story_value" :localdata="story_range" :clear="false" @change="changeStory"></uni-data-select>
                </view>
            </view>      
            <!-- 选择区域(带货) -->
            <view class="choose-box" v-if="name==='带货类视频脚本'">
                <text class="choose-item-title">文案语气</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="tone_value" :localdata="tone_range" :clear="false" @change="changeTone"></uni-data-select>
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
                //预输入
                preContent:'',
                //主题
                main_value:'',
                //内容场景
                background_value:'',
                //营销主体
                marketing_value:'',
                //店铺名称
                brand_value:'',
                //店铺类目
                shop_value:'',
                //产品
                product_value:'',
                //内容氛围
                atmosphere_value:0,
                atmosphere_range:[
                    {"value": 0,"text": "急切"},
                    {"value": 1,"text": "幽默"},
                    {"value": 2,"text": "专业"},
                    {"value": 3,"text": "平缓"},],
                //视频风格
                style_value:0,
                style_range:[
                    {"value": 0,"text": "搞笑"},
                    {"value": 1,"text": "日常"},
                    {"value": 2,"text": "感人"}],
                //内容类型
                content_value:0,
                content_range:[
                    {"value": 0,"text": "生活"},
                    {"value": 1,"text": "旅行"},
                    {"value": 2,"text": "探店"},
                    {"value": 3,"text": "穿搭美妆"},
                    {"value": 4,"text": "手工"},
                    {"value": 5,"text": "宠物"},
                    {"value": 6,"text": "工作学习"}],
                //故事类型
                story_value:0,
                story_range:[
                    {"value": 0,"text": "生活"},
                    {"value": 1,"text": "反转"},
                    {"value": 2,"text": "感人"},
                    {"value": 3,"text": "科幻"},
                    {"value": 4,"text": "情感"},],
                //文案语气
                tone_value:0,
                tone_range:[
                    {"value": 0,"text": "幽默"},
                    {"value": 1,"text": "专业"},
                    {"value": 2,"text": "活泼"},
                    {"value": 3,"text": "平缓"},],
            }
        },
        methods:{
            //输入主题
            inputMain(e){

            },
            //输入内容场景
            inputBackground(e){

            },
            //选择内容氛围
            changeAtmosphere(e){

            },
            //选择视频风格
            changeStyle(e){

            },
            //选择内容类型
            changeContent(e){

            },
            //选择故事类型
            changeStory(e){

            },
            //输入营销主体
            inputMarketing(e){

            },
            //输入店铺名称
            inputBrand(e){

            },
            //输入店铺类目
            inputShop(e){

            },
            //输入产品
            inputProduct(e){

            },
            //选择文案语气
            changeTone(e){

            },
            //跳转到生成详情页
            gotoDetail(){
                switch(this.name){
                    case '口播类视频创意':{
                        if(this.main_value===''||this.background_value===''){
                            uni.showToast({
                                title: '请填写完整信息',
                                icon: 'none'
                            });
                            return
                        }
                        //调用云函数获取模板
                        wx.cloud.callFunction({
                            name:'getModel',
                            data:{
                                name:this.name
                            },
                            success:res=>{
                                this.preContent = res.result.data[0].content + '视频主题：'+this.main_value+';内容场景：'+this.background_value+';内容氛围：'+this.atmosphere_range[this.atmosphere_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                    }
                    case 'vlog类视频脚本':{
                        if(this.main_value===''||this.marketing_value===''){
                            uni.showToast({
                                title: '请填写完整信息',
                                icon: 'none'
                            });
                            return
                        }
                        //调用云函数获取模板
                        wx.cloud.callFunction({
                            name:'getModel',
                            data:{
                                name:this.name
                            },
                            success:res=>{
                                this.preContent = res.result.data[0].content + '视频主题：'+this.main_value+';营销主体：'+this.marketing_value+';内容类型：'+this.content_range[this.content_value].text+';视频风格：'+this.style_range[this.style_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                    }
                    case '剧情类视频脚本':{
                        if(this.main_value===''||this.marketing_value===''){
                            uni.showToast({
                                title: '请填写完整信息',
                                icon: 'none'
                            });
                            return
                        }
                        //调用云函数获取模板
                        wx.cloud.callFunction({
                            name:'getModel',
                            data:{
                                name:this.name
                            },
                            success:res=>{
                                this.preContent = res.result.data[0].content + '视频主题：'+this.main_value+';营销主体：'+this.marketing_value+';故事类型：'+this.story_range[this.story_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                    }
                    case '探店类视频脚本':{
                        if(this.main_value===''||this.brand_value===''||this.shop_value===''){
                            uni.showToast({
                                title: '请填写完整信息',
                                icon: 'none'
                            });
                            return
                        }
                        //调用云函数获取模板
                        wx.cloud.callFunction({
                            name:'getModel',
                            data:{
                                name:this.name
                            },
                            success:res=>{
                                this.preContent = res.result.data[0].content + '视频主题：'+this.main_value+';店铺名称：'+this.brand_value+';店铺类目：'+this.shop_value
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                    }
                    case '带货类视频脚本':{
                        if(this.product_value===''||this.brand_value===''){
                            uni.showToast({
                                title: '请填写完整信息',
                                icon: 'none'
                            });
                            return
                        }
                        //调用云函数获取模板
                        wx.cloud.callFunction({
                            name:'getModel',
                            data:{
                                name:this.name
                            },
                            success:res=>{
                                this.preContent = res.result.data[0].content +'产品：'+this.product_value+';品牌：'+this.brand_value+';文案语气：'+this.tone_range[this.tone_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                    }
                }
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