<template>
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 商业计划书 品牌策划-->
            <view v-if="name==='商业计划书'||name==='品牌策划'">
                <text class="generate-item-title" v-if="name==='商业计划书'">商业主体</text>
                <text class="generate-item-title" v-if="name==='品牌策划'">品牌名称</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "brand_value" type="text" maxlength="16" @input="inputBrand" placeholder="例:拼多多">{{  brand_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ brand_value.length }}/16</view>
            </view>
            <!-- 商业计划书 品牌策划-->
            <view v-if="name==='商业计划书'||name==='品牌策划'">
                <text class="generate-item-title" v-if="name==='商业计划书'">项目类型</text>
                <text class="generate-item-title" v-if="name==='品牌策划'">行业类目</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "project_value" type="text" maxlength="16" @input="inputProject" placeholder="例:线上电商平台">{{  project_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ project_value.length }}/16</view>
            </view>
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">预测营业额</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "turnover_value" type="text" maxlength="16" @input="inputTurnover" placeholder="例:每年2000万">{{  turnover_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ turnover_value.length }}/16</view>
            </view>
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">预计员工数量</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "staff_value" type="text" maxlength="16" @input="inputStaff" placeholder="例:200(没有则填 无)">{{  staff_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ staff_value.length }}/16</view>
            </view>
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">运营成本预估</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "cost_value" type="text" maxlength="16" @input="inputCost" placeholder="例:10万/月(没有则填 无)">{{  cost_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ cost_value.length }}/16</view>
            </view>
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">市场规模预估</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "scale_value" type="text" maxlength="16" @input="inputScale" placeholder="例:10亿(没有则填 无)">{{  scale_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ scale_value.length }}/16</view>
            </view>
            <!-- 商业计划书 -->
            <view v-if="name==='商业计划书'">
                <text class="generate-item-title">竞争对手</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "rival_value" type="text" maxlength="16" @input="inputRival" placeholder="例:淘宝(没有则填 无)">{{  rival_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ rival_value.length }}/16</view>
            </view>
            <!-- 商业演讲 领导发言稿 新闻通稿-->
            <view v-if="name==='商业演讲'||name==='领导发言稿'||name==='新闻通稿'">
                <text class="generate-item-title">演讲主题</text>
                <view :style="{'margin-top':'10px'}" v-if="name==='商业演讲'">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:创业如何降本增效">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'margin-top':'10px'}" v-if="name==='领导发言稿'">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:年会致谢">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'margin-top':'10px'}" v-if="name==='新闻通稿'">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:我司与腾讯云达成合作">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ main_value.length }}/30</view>
            </view>
            <!-- 商业演讲 领导发言稿 新闻通稿-->
            <view v-if="name==='商业演讲'||name==='领导发言稿'||name==='新闻通稿'">
                <text class="generate-item-title">演讲重点</text>
                <view :style="{'margin-top':'10px'}" v-if="name==='商业演讲'">
                    <uni-easyinput v-model= "key_value" type="text" maxlength="30" @input="inputKey" placeholder="例:员工激励机制">{{  key_value }}</uni-easyinput>
                </view>
                <view :style="{'margin-top':'10px'}" v-if="name==='领导发言稿'">
                    <uni-easyinput v-model= "key_value" type="text" maxlength="30" @input="inputKey" placeholder="例:员工奖励">{{  key_value }}</uni-easyinput>
                </view>
                <view :style="{'margin-top':'10px'}" v-if="name==='新闻通稿'">
                    <uni-easyinput v-model= "key_value" type="text" maxlength="30" @input="inputKey" placeholder="例:腾讯云为我们提供...的算力">{{  key_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ key_value.length }}/30</view>
            </view>
            <!-- 品牌策划 -->
            <view v-if="name==='品牌策划'">
                <text class="generate-item-title">品牌理念</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "rival_value" type="text" maxlength="30" @input="inputRival" placeholder="例:做虚拟与现实的桥梁">{{  rival_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ rival_value.length }}/30</view>
            </view>
            <!-- 选择区域(商业演讲 领导发言稿) -->
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
                //商业主体
                brand_value:'',
                //项目类型
                project_value:'',
                //预测营业额
                turnover_value:'',
                //预计员工数量
                staff_value:'',
                //运营成本预估
                cost_value:'',
                //市场规模预估
                scale_value:'',
                //竞争对手
                rival_value:'',
                //演讲主题
                main_value:'',
                //演讲重点
                key_value:'',
                //文章风格
                style_value:0,
                style_range:[
                    {"value": 0,"text": "专业"},
                    {"value": 1,"text": "幽默"},
                    {"value": 2,"text": "文艺"},
                    {"value": 3,"text": "激情"},
                    {"value": 4,"text": "严肃"},
                ],
            }
        },
        methods:{
            //商业主体
            inputBrand(e){

            },
            //项目类型
            inputProject(e){

            },
            //预测营业额
            inputTurnover(e){

            },
            //预计员工数量
            inputStaff(e){

            },
            //运营成本预估
            inputCost(e){

            },
            //市场规模预估
            inputScale(e){

            },
            //竞争对手
            inputRival(e){

            },
            //演讲主题
            inputMain(e){

            },
            //演讲重点
            inputKey(e){

            },
            //文章风格
            changeStyle(e){

            },
            //生成
            gotoDetail(){
                uni.navigateTo({
                    url: '/subpkg/generate/generate_detail'
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