<template>
    <!-- 页面容器 -->
    <view class="generate-container">
        <!-- 标题 -->
        <text class="generate-title">{{ name }}</text>
        <!-- 信息输入区域 -->
        <view class="generate-box">
            <!-- 小红书 抖音 微博 微信 -->
            <view v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微博推广文案'||name==='微信推广文案'||name==='品牌故事生成'||name==='线下活动策划'">
                <text class="generate-item-title">品牌名称</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "name_value" type="text" maxlength="30" @input="inputName" placeholder="例:拼多多">{{  name_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ name_value.length }}/30</view>
            </view v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微博推广文案'||name==='微信推广文案'">
            <!-- 小红书 抖音 微博 微信 -->        
            <view  v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微博推广文案'||name==='微信推广文案'">
                <text class="generate-item-title">营销主体</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "object_value" type="text" maxlength="30" @input="inputObject" placeholder="例:IPhone16">{{  object_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ object_value.length }}/30</view>
            </view>
            <!-- 小红书 抖音 微博 微信 -->
            <view v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微博推广文案'||name==='微信推广文案'">
                <text class="generate-item-title">主题</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:拼多多百亿补贴IPhone16直降两千元">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ main_value.length }}/30</view>
            </view>
            <!-- 小红书 抖音 微博 微信 -->
            <view v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微信推广文案'">
                <text class="generate-item-title">目标人群</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "people_value" type="text" maxlength="16" @input="inputPeople" placeholder="例:20-40岁女性">{{  people_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ people_value.length }}/16</view>
            </view>
            <!-- 微博 -->
            <view v-if="name==='微博推广文案'||name==='知乎回答'">
                <text class="generate-item-title">内容场景</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "background_value" type="text" maxlength="16" @input="inputBackground" placeholder="例:国际金融/地缘冲突">{{  background_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ background_value.length }}/16</view>
            </view>
            <!-- 知乎回答 -->
            <view v-if="name==='知乎回答'">
                <text class="generate-item-title">主题</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:俄乌局势分析">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ main_value.length }}/30</view>
            </view>
            <view v-if="name==='知乎回答'">
                <text class="generate-item-title">问题描述</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "question_value" type="text" maxlength="100" @input="inputQuestion" placeholder="例:莫斯科恐怖袭击跟俄乌局势的联系">{{  question_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ question_value.length }}/100</view>
            </view>
            <!-- 品牌故事 -->
            <view v-if="name==='品牌故事生成'">
                <text class="generate-item-title">行业</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "business_value" type="text" maxlength="16" @input="inputBusiness" placeholder="例:电商">{{  business_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ business_value.length }}/16</view>
            </view>
            <view v-if="name==='品牌故事生成'">
                <text class="generate-item-title">品牌理念</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "idea_value" type="text" maxlength="50" @input="inputIdea" placeholder="例:做国内最亲民的电商平台">{{  idea_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ idea_value.length }}/50</view>
            </view>
            <!-- 线下活动策划 -->
            <view v-if="name==='活动策划'">
                <text class="generate-item-title">经营类目</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "item_value" type="text" maxlength="16" @input="inputItem" placeholder="例:饮品">{{  item_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ item_value.length }}/16</view>
            </view>
            <!-- 线下活动策划 -->            
            <view v-if="name==='活动策划'">
                <text class="generate-item-title">活动主题</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "main_value" type="text" maxlength="30" @input="inputMain" placeholder="例:情人节">{{  main_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ main_value.length }}/30</view>
            </view>
            <!-- 线下活动策划 -->
            <view v-if="name==='活动策划'">
                <text class="generate-item-title">参与人数</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "count_value" type="text" maxlength="16" @input="inputCount" placeholder="例:300人">{{  count_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ count_value.length }}/16</view>
            </view>
            <!-- 线下活动策划 -->
            <view v-if="name==='活动策划'">
                <text class="generate-item-title">活动目的</text>
                <view :style="{'margin-top':'10px'}">
                    <uni-easyinput v-model= "goal_value" type="text" maxlength="30" @input="inputGoal" placeholder="例:试喝'糖炒栗子'豆奶'">{{  goal_value }}</uni-easyinput>
                </view>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ goal_value.length }}/30</view>
            </view>
            <!-- 选择区域(小红书 抖音 微博) -->
            <view class="choose-box" v-if="name==='小红书推广文案'||name==='抖音推广文案'||name==='微信推广文案'">
                <text class="choose-item-title">文案语气</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="tone_value" :localdata="tone_range" :clear="false" @change="changeTone"></uni-data-select>
                </view>
                <text class="choose-item-title">文案类型</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="class_value" :localdata="class_range" :clear="false" @change="changeClass"></uni-data-select>
                </view>
            </view>
            <!-- 选择区域(微博) -->
            <view class="choose-box" v-if="name==='微博推广文案'">
                <text class="choose-item-title">推文口吻</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="class_value" :localdata="class_range_wb" :clear="false" @change="changeClass"></uni-data-select>
                </view>
            </view>
            <!-- 选择区域(知乎) -->
            <view class="choose-box" v-if="name==='知乎回答'">
                <text class="choose-item-title">推文口吻</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="class_value" :localdata="class_range_zh" :clear="false" @change="changeClass"></uni-data-select>
                </view>
            </view>
            <!-- 选择区域(活动策划) -->
            <view class="choose-box" v-if="name==='活动策划'">
                <text class="choose-item-title">活动类型</text>
                <view :style="{'margin-bottom':'30px'}">
                    <uni-data-select v-model="class_value" :localdata="class_range_hd" :clear="false" @change="changeClass"></uni-data-select>
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
                //品牌名称
                name_value:'',
                //营销主体
                object_value:'',
                //主题
                main_value:'',
                //目标人群
                people_value:'',
                //内容场景
                background_value:'',
                //问题描述
                question_value:'',
                //行业
                business_value:'',
                //文案类型
                class_value:0,
                //品牌理念
                idea_value:'',
                //经营类目
                item_value:'',
                //参与人数
                count_value:'',
                //活动目的
                goal_value:'',
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
                    "text": "专业"}],
                //微博推文口吻
                class_range_wb:[{
                    "value": 0,
                    "text": "品牌方"
                },{
                    "value": 1,
                    "text": "博主"}],
                //知乎推文口吻
                class_range_zh:[{
                    "value": 0,
                    "text": "故事型回答"
                },{
                    "value": 1,
                    "text": "经历型回答"
                },{
                    "value": 2,
                    "text": "干货型回答"
                },{
                    "value": 3,
                    "text": "见解型回答"}],
                //活动策划类型
                class_range_hd:[{
                    "value": 0,
                    "text": "线上活动"
                },{
                    "value": 1,
                    "text": "线下活动"
                },{
                    "value": 2,
                    "text": "线上线下活动"}],
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
                
            },
            //输入内容场景
            inputBackground(e){
                
            },
            //输入问题描述
            inputQuestion(e){
                
            },
            //输入行业
            inputBusiness(e){
                
            },
            //输入品牌理念
            inputIdea(e){
                
            },
            //输入经营类目
            inputItem(e){
                
            },
            //输入参与人数
            inputCount(e){
                
            },
            //输入活动目的
            inputGoal(e){
                
            },
            //跳转到生成详情页面
            gotoDetail(){
                //拼接预生成内容
                switch(this.name){
                    case '小红书推广文案':{
                        if(this.name_value==''||this.object_value==''||this.main_value==''||this.people_value==''){
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
                                this.preContent = res.result.data[0].content + '品牌名称：'+this.name_value+';营销主体：'+this.object_value+';主题：'+this.main_value+';目标人群：'+this.people_value+';文案语气：'+this.tone_range[this.tone_value].text+';文案类型：'+this.class_range[this.class_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '抖音推广文案':{
                        if(this.name_value==''||this.object_value==''||this.main_value==''||this.people_value==''){
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
                                this.preContent = res.result.data[0].content + '品牌名称：'+this.name_value+';营销主体：'+this.object_value+';主题：'+this.main_value+';目标人群：'+this.people_value+';文案语气：'+this.tone_range[this.tone_value].text+';文案类型：'+this.class_range[this.class_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '微博推广文案':{
                        if(this.name_value==''||this.object_value==''||this.main_value==''||this.background_value==''){
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
                                this.preContent = res.result.data[0].content + '品牌名称：'+this.name_value+';营销主体：'+this.object_value+';主题：'+this.main_value+';内容场景'+this.background_value+';推文口吻(发送该推文的主体)：'+this.class_range_wb[this.class_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '微信推广文案':{
                        if(this.name_value==''||this.object_value==''||this.main_value==''||this.people_value==''){
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
                                this.preContent = res.result.data[0].content + '品牌名称：'+this.name_value+';营销主体：'+this.object_value+';主题：'+this.main_value+';目标人群：'+this.people_value+';文案语气：'+this.tone_range[this.tone_value].text+';文案类型：'+this.class_range[this.class_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '知乎回答':{
                        if(this.background_value=='' || this.main_value==''||this.question_value==''){
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
                                this.preContent = res.result.data[0].content + '内容场景'+this.background_value+';主题：'+this.main_value+';问题描述：'+this.question_value+';推文口吻：'+this.class_range_zh[this.class_value].text
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '品牌故事生成':{
                        if(this.name_value=='' || this.business_value=='' || this.idea_value==''){
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
                                this.preContent = res.result.data[0].content +'品牌名称：'+this.name_value + ';行业：'+this.business_value+';品牌理念：'+this.idea_value
                                uni.navigateTo({
                                    url: '/subpkg/generate/generate_detail?name='+this.name+'&preContent='+this.preContent
                                })
                            }
                        })
                        break;
                    }
                    case '活动策划':{
                        if(this.item_value=='' || this.main_value=='' || this.count_value=='' || this.goal_value==''){
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
                                this.preContent = res.result.data[0].content + '经营类目：'+this.item_value+';活动主题：'+this.main_value+';参与人数：'+this.count_value+';活动目的：'+this.goal_value+';活动类型：'+this.class_range_hd[this.class_value].text
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