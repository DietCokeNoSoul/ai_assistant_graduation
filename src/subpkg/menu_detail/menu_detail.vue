<template>
    <view class="menu-detail-container">
        <view v-if="class_name==='联系客服'" class="customer-service">
            <text>有问题请联系微信:lhy_gta</text>
        </view>
        <view v-else-if="class_name==='关于我们'" class="app-detail">
            <text>这是一个文成生成式小程序</text>
            <text>使用接口:GPT3.5</text>
        </view>
        <view v-else class="submit-bug">
            <view class="submit-bug-text-box">
                <text class="submit-bug-text">反馈类型</text>
                <uni-data-checkbox v-model="radioValue" :localdata="radioClass"></uni-data-checkbox>
                <text class="submit-bug-text">反馈内容</text>
                <uni-easyinput v-model="detail_value" type="textarea" placeholder="请输入内容" maxlength="200" @input="inputDetail"/>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'30px',' text-align': 'right'}"> 字数:{{ detailLength }}/200</view>
                <text class="submit-bug-text">联系方式</text>
                <uni-easyinput v-model="Info_value" type="text" placeholder="请输入内容" maxlength="30" @input="inputInfo"/>
                <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'30px',' text-align': 'right'}"> 字数:{{ infoLength }}/30</view>
            </view>
            <button class="submit-bug-btn" @click="submitForm">提交</button>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                //菜单选项类型
                class_name:'',
                //单选框内容
                radioValue:0,
                radioClass:[
                    {'value': 0,
                     'text': '建议'},
                    {'value': 1,
                     'text': '故障'},
                ],
                //输入框内容
                detail_value:'',
                Info_value:'',
                //输入框字数
                detailLength:0,
                infoLength:0,
            }
        },
        onLoad() {
            //获取页面参数
            this.class_name = this.name
        },
        methods:{
            //输入框字数
            inputDetail(e) {
                this.detailLength = this.detail_value.length
			},
            //输入框字数
            inputInfo(e){
                this.infoLength = this.Info_value.length
            },
            //提交表单
            submitForm(){

            }
        },
        //vue3支持props来接收页面参数
        props:{
            name:{
                type: String,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
.menu-detail-container{
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #f3f3f3;
    .customer-service{
        margin: 10px 10px;
        border-radius: 8px;
        padding: 15px 15px;
        background-color: #ffffff;
    }
    .app-detail{
        margin: 10px 10px;
        border-radius: 8px;
        padding: 15px 15px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
    }
    .submit-bug{
        height: 80%;
        margin: 10px 10px;
        border-radius: 8px;
        padding: 15px 15px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .submit-bug-text-box{
            display: flex;
            flex-direction: column;
            .submit-bug-text{
                margin-top: 20px;
                margin-bottom: 10px;
            font-size: 17px;
            color:#565a7c;
            }
        }
        .submit-bug-btn{
            border-radius: 30px;
            width: 60%;
            background-color: #00CC66;
            color:#ffffff;
        }
    }
}
</style>