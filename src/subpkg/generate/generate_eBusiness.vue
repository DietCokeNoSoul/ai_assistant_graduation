<template>
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 商品描述 -->
            <view v-if="name==='商品描述'||name==='好评批量生成'||name==='专业回复评论'">
                <text class="generate-item-title" v-if="name==='商品描述'||name==='好评批量生成'||name==='专业回复评论'">商品名称</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "name_value" type="text" maxlength="30"  placeholder="例:拯救者y9000p游戏本">{{  name_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ name_value.length }}/30</view>
            </view>
            <!-- 商品描述 -->
            <view v-if="name==='商品描述'">
                <text class="generate-item-title" v-if="name==='商品描述'">原商品描述</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "detail_value" type="text" maxlength="30"  placeholder="例:复制粘贴原来的描述(没有则填 无)">{{  detail_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ detail_value.length }}/30</view>
            </view>
            <!-- 好评批量生成 -->
            <view v-if="name==='好评批量生成'">
                <text class="generate-item-title" v-if="name==='好评批量生成'">好评重点</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "point_value" type="text" maxlength="30" placeholder="例:性能超好,能流畅游玩各种3A游戏大作">{{  point_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ point_value.length }}/30</view>
            </view>
            <!-- 专业回复评论 -->
            <view v-if="name==='专业回复评论'">
                <text class="generate-item-title">用户评论</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "comment_value" type="text" maxlength="500"  placeholder="粘贴用户评论">{{  comment_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ comment_value.length }}/500</view>
            </view>
            <!-- 专业回复评论 -->
            <view v-if="name==='专业回复评论'">
                <text class="generate-item-title">补偿机制</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "compensation_value" type="text" maxlength="100"  placeholder="差评触发,没有则填无,例:20元无门槛券">{{  compensation_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ compensation_value.length }}/100</view>
            </view>
            <!-- 店铺介绍 -->
            <view v-if="name==='店铺介绍'">
                <text class="generate-item-title">品牌名称</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "brand_value" type="text" maxlength="30"  placeholder="例:拯救者">{{  brand_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ brand_value.length }}/30</view>
            </view>
            <!-- 店铺介绍 -->
            <view v-if="name==='店铺介绍'">
                <text class="generate-item-title">主营业务</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "business_value" type="text" maxlength="30"  placeholder="例:高性能笔记本电脑">{{  business_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ business_value.length }}/30</view>
            </view>
            <!-- 选择区域(商品描述) -->
            <view class="choose-box" v-if="name==='商品描述'">
                <text class="choose-item-title">描述重点</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="key_value" :localdata="key_range" :clear="false" @change="changeKey"></uni-data-select>
                </view>
            </view>  
            <!-- 选择区域(商品描述 好评批量生成 店铺介绍') -->
            <view class="choose-box" v-if="name==='商品描述'||name==='好评批量生成'||name==='店铺介绍'">
                <text class="choose-item-title">文案风格</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="style_value" :localdata="style_range" :clear="false" @change="changeStyle"></uni-data-select>
                </view>
            </view>    
            <!-- 好评批量生成 -->
            <view class="choose-box" v-if="name==='好评批量生成'">
                <text class="choose-item-title">字数要求</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="count_value" :localdata="count_range" :clear="false" @change="changeCount"></uni-data-select>
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
                //商品描述
                name_value:'',
                //商品描述
                detail_value:'',
                //好评重点
                point_value:'',
                //用户评论
                comment_value:'',
                //补偿机制
                compensation_value:'',
                //店铺介绍
                brand_value:'',
                //主营业务
                business_value:'',
                //描述重点
                key_value:0,
                key_range:[
                    {"value": 0,"text": "使用场景"},
                    {"value": 1,"text": "用户痛点"},
                    {"value": 2,"text": "品牌故事"},
                    {"value": 3,"text": "产品描述"},
                    {"value": 4,"text": "设计说明"},
                    {"value": 5,"text": "竞品对比"}],
                //文案风格
                style_value:0,
                style_range:[
                    {"value": 0,"text": "激动"},
                    {"value": 1,"text": "活泼"},
                    {"value": 2,"text": "幽默"},
                    {"value": 3,"text": "专业"},
                    {"value": 4,"text": "文艺"}],
                //字数要求
                count_value:0,
                count_range:[
                    {"value": 0,"text": "短评"},
                    {"value": 1,"text": "中评"},
                    {"value": 2,"text": "长评"},
                    {"value": 3,"text": "自由发挥"}],
            }
        },
        methods:{
            //生成
            gotoDetail(){
                switch(this.name){
                    case '商品描述':{
                        if(this.name_value === ''){
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
                                this.preContent = res.result.data[0].content +'商品名称：'+this.name_value+';原商品描述：'+this.detail_value+';描述重点：'+this.key_range[this.key_value].text+';文案风格：'+this.style_range[this.style_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '好评批量生成':{
                        if(this.name_value === '' || this.point_value === ''){
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
                                this.preContent = res.result.data[0].content +'商品名称：'+this.name_value+';好评重点：'+this.point_value+';文案风格：'+this.style_range[this.style_value].text+';字数要求：'+this.count_range[this.count_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '专业回复评论':{
                        if(this.comment_value === '' || this.compensation_value === ''){
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
                                this.preContent = res.result.data[0].content +'商品名称：'+this.name_value +';用户评论：'+this.comment_value+';补偿机制：'+this.compensation_value
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '店铺介绍':{
                        if(this.brand_value === '' || this.business_value === ''){
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
                                this.preContent = res.result.data[0].content +'品牌名称：'+this.brand_value +';主营业务：'+this.business_value+';文案风格：'+this.style_range[this.style_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
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