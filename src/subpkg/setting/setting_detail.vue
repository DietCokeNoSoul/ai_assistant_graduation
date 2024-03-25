<template>
    <!-- 设置容器 -->
    <view class="setting-detail-container">
        <!-- 设置昵称 -->
        <view v-if="settingClass==='昵称'" class="setting-detail-box">
            <text :style="{'margin-bottom':'20px'}">昵称</text>
            <!-- 输入昵称 -->
            <uni-easyinput v-model= "props_value" type="text" maxlength="16" @input="inputName">{{  props_value }}</uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{    props_value.length }}/16</view>
        </view>
        <!-- 设置头像 -->
        <view v-else>
            <view class="user-image-container">
                <!-- 图片区域 -->
                <view class="user-image-box">
                    <image class="user-image" :src="props_value" />
                </view>
                <button class="upload-image" @click="uploadImage">上传</button>
            </view>
        </view>
        <!-- 提交按钮 -->
        <button class="submin-name-btn" @click="submitForm">提交</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                // 页面类型
                settingClass:'',
                //昵称
                props_value  : '',
            }
        },
        methods:{
            //输入昵称
            inputName(e) {
                this.props_value = e
            },
            //提交
            submitForm(){
                uni.showModal({
                    title: '提示',
                    content: '确定修改吗？',
                    success: function (res) {
                        if (res.confirm) {
                            // uni.removeStorageSync('token')
                            uni.reLaunch({
                                url: '/subpkg/setting/setting'
                            })
                        }
                    }
                })
            },
            //上传图片
            uploadImage(){
                
            }
        },
        onLoad() {
            // 赋值页面参数到data
            this.settingClass = this.name
            this.props_value = this.value
        },
        props:{
            // 页面参数
            name:{
                type: String,
                default: ''
            },
            value:{
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.setting-detail-container{
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .setting-detail-box{
        margin: 10px 10px;
        background-color: white;
        border-radius: 8px;
        padding: 15px 15px;
        display: flex;
        flex-direction: column;
    }
    .submin-name-btn{
        border-radius: 30px;
        width: 60%;
        background-color: #00CC66;
        color:#ffffff;
        margin-bottom: 20%;
    }
    .user-image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .user-image-box{
            margin-top: 50rpx;
            border-radius: 10px;
            height: 300rpx;
            width: 300rpx;
            overflow: hidden;
            .user-image{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .upload-image{
                margin-top: 40rpx;
                border-radius: 10px;
                width: 400rpx;
                background-color: #00CC66;
                color:#ffffff;
        }
    }
}
</style>